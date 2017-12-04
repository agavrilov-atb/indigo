package com.indigo.oracle.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.flow.CreateClaimReq
import com.indigo.oracle.service.Oracle
import net.corda.core.flows.FlowException
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.FlowSession
import net.corda.core.flows.InitiatedBy
import net.corda.core.utilities.unwrap

@InitiatedBy(CreateClaimReq::class)
class CreateClaimReqHandler(val session: FlowSession) : FlowLogic<Unit?>() {

    @Suspendable
    override fun call(): Unit? {
        val parameters= session.receive<List<String>>().unwrap { it }
        val claimOffer = parameters.first()
        val claimDef = parameters.get(1)
        val masterSecret = parameters.last()
        try {
            val response = this.serviceHub.cordaService(Oracle::class.java).createClaimRequest(claimOffer, claimDef, masterSecret)
            return session.send(listOf(response))
        } catch (e: Exception) {
            throw FlowException(e)
        }
    }

}