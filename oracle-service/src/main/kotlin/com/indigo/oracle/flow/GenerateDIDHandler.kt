package com.indigo.oracle.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.flow.GenerateDID
import net.corda.core.flows.FlowException
import net.corda.core.flows.InitiatedBy
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.FlowSession
import com.indigo.oracle.service.Oracle

@InitiatedBy(GenerateDID::class)
class GenerateDIDHandler(session: FlowSession) : FlowLogic<Unit?>() {
    var session: FlowSession? = null
        private set

    init {
        this.session = session
    }

    @Suspendable
    @Throws(FlowException::class)
    override fun call(): Unit? {
        try {
            // Get the nth prime from the oracle.
            val response = this.serviceHub.cordaService(Oracle::class.java).generateDID()
            return session?.send(response)
        } catch (e: Exception) {
            // Re-throw the exception as a FlowException so its propagated to the querying node.
            throw FlowException(e)
        }
    }

}
