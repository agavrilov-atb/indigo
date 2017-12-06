package com.indigo.flow

import co.paralleluniverse.fibers.Suspendable
import com.beust.klaxon.JsonArray
import com.beust.klaxon.JsonObject
import com.beust.klaxon.Parser
import com.indigo.contract.DIDContract
import com.indigo.contract.DIDState
import com.indigo.contract.DID_PROGRAM_ID
import net.corda.core.contracts.Command
import net.corda.core.flows.FinalityFlow
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.InitiatingFlow
import net.corda.core.flows.StartableByRPC
import net.corda.core.identity.CordaX500Name
import net.corda.core.transactions.SignedTransaction
import net.corda.core.transactions.TransactionBuilder
import net.corda.core.utilities.ProgressTracker
import java.util.function.Predicate

@InitiatingFlow
@StartableByRPC
class SovrinFlow : FlowLogic<SignedTransaction>() {
    companion object {
        object SET_UP : ProgressTracker.Step("Initialising flow.")
        object GENERATING_DID : ProgressTracker.Step("Requesting a new DID from the Oracle.")
        object CREATING_CLAIM_DEF : ProgressTracker.Step("Creating a new Sovrin claim definition.")
        object ESTABLISHING_MASTER_SECRET : ProgressTracker.Step("Establishing a master secret.")
        object STORING_CLAIM_OFFER : ProgressTracker.Step("Storing a claim offer.")
        object GETTING_DATA_SCHEMA : ProgressTracker.Step("Getting a data schema.")
        object CREATING_CLAIM_REQUEST : ProgressTracker.Step("Creating a claim request.")
        object CREATING_CLAIM : ProgressTracker.Step("Creating a claim.")
        object STORING_CLAIM: ProgressTracker.Step("Storing a claim.")
        object GETTING_CLAIMS_FOR_PROOF_REQUEST : ProgressTracker.Step("Getting claims for proof request.")
        object CREATING_PROOF_HANDLER : ProgressTracker.Step("Creating a proof.")
        object BUILDING_THE_TX : ProgressTracker.Step("Building transaction.")
        object VERIFYING_THE_TX : ProgressTracker.Step("Verifying transaction.")
        object WE_SIGN : ProgressTracker.Step("signing transaction.")
        object ORACLE_SIGNS : ProgressTracker.Step("Requesting oracle signature.")
        object FINALISING : ProgressTracker.Step("Finalising transaction.") {
            override fun childProgressTracker() = FinalityFlow.tracker()
        }

        fun tracker() = ProgressTracker(SET_UP,
                GENERATING_DID,
                CREATING_CLAIM_DEF,
                ESTABLISHING_MASTER_SECRET,
                STORING_CLAIM_OFFER,
                GETTING_DATA_SCHEMA,
                CREATING_CLAIM_REQUEST,
                CREATING_CLAIM,
                STORING_CLAIM,
                GETTING_CLAIMS_FOR_PROOF_REQUEST,
                CREATING_PROOF_HANDLER,
                BUILDING_THE_TX,
                VERIFYING_THE_TX,
                WE_SIGN,
                ORACLE_SIGNS,
                FINALISING)
    }

    override val progressTracker = tracker()

    @Suspendable
    override fun call(): SignedTransaction {
        progressTracker.currentStep = SET_UP
        val notary = serviceHub.networkMapCache.notaryIdentities.first()
        // In Corda v1.0, we identify oracles we want to use by name.
        val oracleName = CordaX500Name("Oracle", "New York","US")
        val oracle = serviceHub.networkMapCache.getNodeByLegalName(oracleName)?.legalIdentities?.first()
                ?: throw IllegalArgumentException("Requested oracle $oracleName not found on network.")

        progressTracker.currentStep = GENERATING_DID
        val sovrinDIDFromOracle = subFlow(GenerateDID(oracle))

        progressTracker.currentStep = CREATING_CLAIM_DEF
        val schemaJson = "{\"seqNo\":1,\"data\": {\"name\":\"gvt\",\"version\":\"1.0\",\"keys\":[\"age\",\"sex\",\"height\",\"name\"]}}"
        val claimDef = subFlow(CreateClaimDef(oracle, schemaJson))

        progressTracker.currentStep = ESTABLISHING_MASTER_SECRET
        val masterSecret = "mastersecret"
        subFlow(EstablishMasterSecret(oracle, masterSecret))

        progressTracker.currentStep = STORING_CLAIM_OFFER
        val issuerDid = "W4SGRU86Z58d6TV7PBUe6g" //part of agent code, DID of trust anchor
        val claimOffer = "{\"issuer_did\":\"$issuerDid\", \"schema_seq_no\":1}"
        subFlow(StoreClaimOffer(oracle, claimOffer))

        progressTracker.currentStep = GETTING_DATA_SCHEMA
        val claimOfferFilter = "{\"issuer_did\":\"$issuerDid\"}"
        val claimOffersJson = subFlow(GetClaimOffers(oracle, claimOfferFilter))
        val claimOffersObject = Parser().parse(StringBuilder(claimOffersJson)) as JsonArray<JsonObject>
        val claimOfferObject = claimOffersObject.get(0)

        progressTracker.currentStep = CREATING_CLAIM_REQUEST
        //TODO: find a better way to pass parameters across flows
        val claimReq = subFlow(CreateClaimReq(oracle, claimOfferObject.toJsonString(), claimDef, masterSecret)).first()

        progressTracker.currentStep = CREATING_CLAIM
        val claimAttributes = "{\"sex\":[\"male\",\"5944657099558967239210949258394887428692050081607692519917050011144233115103\"],\"name\":[\"Alex\",\"1139481716457488690172217916278103335\"],\"height\":[\"175\",\"175\"],\"age\":[\"28\",\"28\"]}"
        val createClaimResult = subFlow(CreateClaim(oracle, claimReq, claimAttributes)).first()

        progressTracker.currentStep = STORING_CLAIM
        subFlow(StoreClaim(oracle, createClaimResult))

        progressTracker.currentStep = GETTING_CLAIMS_FOR_PROOF_REQUEST
        val proofRequest = "{\"nonce\":\"123432421212\",\"name\":\"proof_req_1\",\"version\":\"0.1\",\"requested_attrs\":{\"attr1_uuid\":{\"schema_seq_no\":1,\"name\":\"name\"},\"attr2_uuid\":{\"schema_seq_no\":1,\"name\":\"sex\"}},\"requested_predicates\":{\"predicate1_uuid\":{\"attr_name\":\"age\",\"p_type\":\"GE\",\"value\":18}}}"
        val claimsForProof = subFlow(ClaimsForProofRequest(oracle, proofRequest))

        progressTracker.currentStep = CREATING_PROOF_HANDLER

        progressTracker.currentStep = BUILDING_THE_TX
        val didState = DIDState(sovrinDIDFromOracle, ourIdentity)
        val didCmdData = DIDContract.Commands.GenerateDID(sovrinDIDFromOracle)
        // By listing the oracle here, we make the oracle a required signer.
        val didCmdRequiredSigners = listOf(oracle.owningKey, ourIdentity.owningKey)
        val builder = TransactionBuilder(notary)
                .addOutputState(didState, DID_PROGRAM_ID)
                .addCommand(didCmdData, didCmdRequiredSigners)

        progressTracker.currentStep = VERIFYING_THE_TX
        builder.verify(serviceHub)

        progressTracker.currentStep = WE_SIGN
        val ptx = serviceHub.signInitialTransaction(builder)

        progressTracker.currentStep = ORACLE_SIGNS
        // For privacy reasons, we only want to expose to the oracle any commands of type `DIDContract.Create`
        // that require its signature.
        val ftx = ptx.buildFilteredTransaction(Predicate {
            when (it) {
                is Command<*> -> oracle.owningKey in it.signers && it.value is DIDContract.Commands.GenerateDID
                else -> false
            }
        })

        val oracleSignature = subFlow(SignSovrin(oracle, ftx))
        val stx = ptx.withAdditionalSignature(oracleSignature)

        progressTracker.currentStep = FINALISING
        return subFlow(FinalityFlow(stx))
    }
}