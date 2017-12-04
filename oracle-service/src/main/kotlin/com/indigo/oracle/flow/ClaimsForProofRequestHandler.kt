package com.indigo.oracle.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.flow.ClaimsForProofRequest
import com.indigo.oracle.service.Oracle
import net.corda.core.flows.FlowException
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.FlowSession
import net.corda.core.flows.InitiatedBy
import net.corda.core.utilities.unwrap

@InitiatedBy(ClaimsForProofRequest::class)
class ClaimsForProofRequestHandler(val session: FlowSession) : FlowLogic<Unit?>() {

    @Suspendable
    override fun call(): Unit? {
        val proofRequest= session.receive<String>().unwrap { it }
        try {
            val response = this.serviceHub.cordaService(Oracle::class.java).claimsForProofReq(proofRequest)
            return session.send(response)
        } catch (e: Exception) {
            throw FlowException(e)
        }
    }

}