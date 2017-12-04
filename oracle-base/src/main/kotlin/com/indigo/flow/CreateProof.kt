package com.indigo.flow

import co.paralleluniverse.fibers.Suspendable
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.InitiatingFlow
import net.corda.core.identity.Party
import net.corda.core.utilities.unwrap

@InitiatingFlow
//TODO
class CreateProof(val oracle: Party, val schema: String) : FlowLogic<String>() {
    @Suspendable override fun call() = initiateFlow(oracle).sendAndReceive<String>(schema).unwrap { it }
}