package com.indigo.flow

import co.paralleluniverse.fibers.Suspendable
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.InitiatingFlow
import net.corda.core.identity.Party
import net.corda.core.utilities.unwrap

@InitiatingFlow
class CreateClaim(val oracle: Party, val claimReq: String, val claimAttributes: String) : FlowLogic<List<String>>() {
    @Suspendable override fun call() = initiateFlow(oracle).sendAndReceive<List<String>>(listOf(claimReq, claimAttributes)).unwrap { it }
}