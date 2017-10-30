package com.indigo.flow

import co.paralleluniverse.fibers.Suspendable
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.InitiatingFlow
import net.corda.core.identity.Party
import net.corda.core.utilities.unwrap

@InitiatingFlow
class GetClaimOffers(val oracle: Party, val claimOfferFilter: String) : FlowLogic<String>() {
    @Suspendable override fun call() = initiateFlow(oracle).sendAndReceive<String>(claimOfferFilter).unwrap { it }
}