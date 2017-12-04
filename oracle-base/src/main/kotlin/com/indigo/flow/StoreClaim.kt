package com.indigo.flow

import co.paralleluniverse.fibers.Suspendable
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.InitiatingFlow
import net.corda.core.identity.Party
import net.corda.core.utilities.unwrap

@InitiatingFlow
class StoreClaim(val oracle: Party, val issuerClaim: String) : FlowLogic<Unit>() {
    @Suspendable override fun call() = initiateFlow(oracle).sendAndReceive<Unit>(issuerClaim).unwrap { it }
}