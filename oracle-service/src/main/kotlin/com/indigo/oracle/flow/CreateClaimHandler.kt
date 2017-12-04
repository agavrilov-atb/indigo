package com.indigo.oracle.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.flow.ClaimsForProofRequest
import com.indigo.flow.CreateClaim
import com.indigo.oracle.service.Oracle
import net.corda.core.flows.FlowException
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.FlowSession
import net.corda.core.flows.InitiatedBy
import net.corda.core.utilities.unwrap

@InitiatedBy(CreateClaim::class)
class CreateClaimHandler(val session: FlowSession) : FlowLogic<Unit?>() {

    @Suspendable
    override fun call(): Unit? {
        val parameters= session.receive<List<String>>().unwrap { it }
        val claimReq = parameters.first()
        val claimAttributes = parameters.last()
        try {
            val response = this.serviceHub.cordaService(Oracle::class.java).issuerCreateClaim(claimReq, claimAttributes)
            return session.send(listOf(response))
        } catch (e: Exception) {
            throw FlowException(e)
        }
    }

}