package com.indigo.oracle.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.flow.GetClaimOffers
import com.indigo.oracle.service.Oracle
import net.corda.core.flows.FlowException
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.FlowSession
import net.corda.core.flows.InitiatedBy
import net.corda.core.utilities.unwrap

@InitiatedBy(GetClaimOffers::class)
class GetClaimOffersHandler(val session: FlowSession) : FlowLogic<Unit?>() {

    @Suspendable
    override fun call(): Unit? {
        val claimOfferFilter= session.receive<String>().unwrap { it }
        try {
            val response = this.serviceHub.cordaService(Oracle::class.java).getClaimOffers(claimOfferFilter)
            return session.send(response)
        } catch (e: Exception) {
            throw FlowException(e)
        }
    }

}