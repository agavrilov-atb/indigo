package com.indigo.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.contract.DIDContract
import com.indigo.contract.DIDState
import com.indigo.contract.DID_PROGRAM_ID
import com.indigo.contract.IOUContract
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
        object CREATING_SCHEMA : ProgressTracker.Step("Creating a new Sovrin data schema.")
        object ESTABLISHING_MASTER_SECRET : ProgressTracker.Step("Establishing a master secret.")
        object BUILDING_THE_TX : ProgressTracker.Step("Building transaction.")
        object VERIFYING_THE_TX : ProgressTracker.Step("Verifying transaction.")
        object WE_SIGN : ProgressTracker.Step("signing transaction.")
        object ORACLE_SIGNS : ProgressTracker.Step("Requesting oracle signature.")
        object FINALISING : ProgressTracker.Step("Finalising transaction.") {
            override fun childProgressTracker() = FinalityFlow.tracker()
        }

        fun tracker() = ProgressTracker(SET_UP,
                GENERATING_DID,
                CREATING_SCHEMA,
                ESTABLISHING_MASTER_SECRET,
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

        progressTracker.currentStep = CREATING_SCHEMA
        val schema = "{\"seqNo\":1,\"data\": {\"name\":\"gvt\",\"version\":\"1.0\",\"keys\":[\"age\",\"sex\",\"height\",\"name\"]}}"
        val newSchema = subFlow(CreateSchema(oracle, schema))

        progressTracker.currentStep = ESTABLISHING_MASTER_SECRET
        subFlow(EstablishMasterSecret(oracle, "mastersecret"))

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