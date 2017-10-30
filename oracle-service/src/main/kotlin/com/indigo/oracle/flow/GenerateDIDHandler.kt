package com.indigo.oracle.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.flow.GenerateDID
import net.corda.core.flows.FlowException
import net.corda.core.flows.InitiatedBy
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.FlowSession
import com.indigo.oracle.service.Oracle

@InitiatedBy(GenerateDID::class)
class GenerateDIDHandler(val session: FlowSession) : FlowLogic<Unit?>() {

    @Suspendable
    override fun call(): Unit? {
        try {
            val response = this.serviceHub.cordaService(Oracle::class.java).generateDID()
            return session.send(response)
        } catch (e: Exception) {
            throw FlowException(e)
        }
    }

}
