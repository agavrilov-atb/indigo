package com.indigo.oracle.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.flow.SignSovrin
import com.indigo.oracle.service.Oracle
import net.corda.core.flows.FlowException
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.FlowSession
import net.corda.core.flows.InitiatedBy
import net.corda.core.transactions.FilteredTransaction
import net.corda.core.utilities.ProgressTracker
import net.corda.core.utilities.unwrap

// The oracle flow to sign prime-number transactions.
@InitiatedBy(SignSovrin::class)
class SignSovrinHandler(val session: FlowSession) : FlowLogic<Unit>() {
    companion object {
        object RECEIVING : ProgressTracker.Step("Receiving sign request.")
        object SIGNING : ProgressTracker.Step("Signing filtered transaction.")
        object SENDING : ProgressTracker.Step("Sending sign response.")
    }

    override val progressTracker = ProgressTracker(RECEIVING, SIGNING, SENDING)

    @Suspendable
    override fun call() {
        progressTracker.currentStep = RECEIVING
        val request = session.receive<FilteredTransaction>().unwrap { it }

        progressTracker.currentStep = SIGNING
        val response = try {
            serviceHub.cordaService(Oracle::class.java).sign(request)
        } catch (e: Exception) {
            throw FlowException(e)
        }

        progressTracker.currentStep = SENDING
        session.send(response)
    }
}
