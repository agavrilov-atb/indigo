package com.indigo.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.contract.TrustContract
import com.indigo.state.SovrinTrustState
import net.corda.core.flows.*
import net.corda.core.serialization.CordaSerializable
import net.corda.core.transactions.SignedTransaction
import net.corda.core.utilities.ProgressTracker
import net.corda.core.identity.Party
import net.corda.core.transactions.TransactionBuilder
import net.corda.core.contracts.*
import net.corda.core.identity.AbstractParty
import net.corda.core.utilities.unwrap
import net.corda.finance.utils.sumCashBy
import java.time.Instant
import java.util.*

/**
 * Created by nxshah5 on 11/9/17.
 */
object SetupTrustFlow {

    @InitiatingFlow
    @StartableByRPC
    class SetupTrustInitiateFlow(val me: Party, val myDID: String,val otherParty:Party,val otherPartyDID:String) : FlowLogic<SignedTransaction>() {
        override val progressTracker: ProgressTracker = tracker()


        companion object {
            object START : ProgressTracker.Step("Initialization")
            object BUILD_TRANSACTION : ProgressTracker.Step("Build the transaction")
            object VERIFY_TRANSACTION : ProgressTracker.Step("Verify the transaction")
            object SIGN_TRANSACTION : ProgressTracker.Step("Sign the transaction")
            object VERIFYING_AND_SIGNING : ProgressTracker.Step("Verifying and singing transaction") {
                override fun childProgressTracker() = SignTransactionFlow.tracker()
            }

            object COLLECT_SIGNATURE_FLOW : ProgressTracker.Step("Collect signatures from counterparties") {
                override fun childProgressTracker() = CollectSignaturesFlow.tracker()
            }

            object FINALITY_FLOW : ProgressTracker.Step("Start FinalityFlow") {
                override fun childProgressTracker(): ProgressTracker = FinalityFlow.tracker()
            }

            fun tracker() = ProgressTracker(START, BUILD_TRANSACTION, VERIFY_TRANSACTION, SIGN_TRANSACTION, COLLECT_SIGNATURE_FLOW, FINALITY_FLOW)
        }
        @Suspendable
        override fun call(): SignedTransaction {

            progressTracker.currentStep = START
            val notary = serviceHub.networkMapCache.notaryIdentities.first()
            val me = serviceHub.myInfo.legalIdentities.first()


            /**
             * This is the v1.0 addition.
             */
            val session = initiateFlow(otherParty)

            session.send(TrustRequest(me,myDID,otherPartyDID))


            progressTracker.currentStep = VERIFY_TRANSACTION
            println("=============${progressTracker.currentStep}=============")
            //Wait for the signed transaction
            val signedTxFlow = object: SignTransactionFlow(session,VERIFYING_AND_SIGNING.childProgressTracker()){


                override fun checkTransaction(stx: SignedTransaction) {

                    println(stx)
                }


            }

            var tx= subFlow(signedTxFlow)


            return tx;
        }
    }


    @InitiatedBy(SetupTrustInitiateFlow::class)
    class AcceptTrustFlow(private val otherSideSession: FlowSession) : FlowLogic<SignedTransaction>() {

        override val progressTracker: ProgressTracker = tracker()

        companion object {

            val PERCENT_VARIANCE = 0.10

            object RECEIVING: ProgressTracker.Step("waiting to receive offer")
            object VERIFYING: ProgressTracker.Step("Verifying proposal")
            object SIGNING : ProgressTracker.Step("Generating and Signing transaction")
            object COLLECTING_SIGNATURES : ProgressTracker.Step("Collecting signatures from other parties") {
                override fun childProgressTracker() = CollectSignaturesFlow.tracker()
            }
            object RECORDING: ProgressTracker.Step("Recording transaction")

            fun tracker() = ProgressTracker(RECEIVING,VERIFYING,SIGNING,COLLECTING_SIGNATURES,RECORDING)
        }

        @Suspendable
        override fun call(): SignedTransaction {

            progressTracker.currentStep = RECEIVING
            println("=============${progressTracker.currentStep}=============")

           // val proposalData = subFlow(ReceiveStateAndRefFlow<OwnableState>(otherSideSession)).single()
            //  var proposalData = otherSideSession.receive<CPProposal>()

            progressTracker.currentStep = VERIFYING
            println("=============${progressTracker.currentStep}=============")

            var trustRequest = otherSideSession.receive<TrustRequest>().unwrap{

                it
            }

            progressTracker.currentStep = SIGNING
            println("=============${progressTracker.currentStep}=============")

            val ptx = TransactionBuilder(serviceHub.networkMapCache.notaryIdentities.first())

            ptx.addOutputState(SovrinTrustState(trustRequest.me,trustRequest.myDID,serviceHub.myInfo.legalIdentities.first(),trustRequest.otherPartyDID,UUID.randomUUID().toString(), Instant.now()),TrustContract.TRUST_PROGRAM_ID)
            ptx.addCommand(TrustContract.Commands.Establish(), listOf(trustRequest.me.owningKey,serviceHub.myInfo.legalIdentities.first().owningKey))

            var partialSignedTx = serviceHub.signInitialTransaction(ptx)



            progressTracker.currentStep = COLLECTING_SIGNATURES
            println("=============${progressTracker.currentStep}=============")

            var sellerSignature = subFlow(CollectSignatureFlow(partialSignedTx, otherSideSession, otherSideSession.counterparty.owningKey))
            val twiceSignedTx = partialSignedTx + sellerSignature

            progressTracker.currentStep = RECORDING
            println("=============${progressTracker.currentStep}=============")
            return subFlow(FinalityFlow(twiceSignedTx))

        }


    }


    @CordaSerializable
    data class TrustRequest(val me:Party,val myDID:String,val otherPartyDID: String)

}