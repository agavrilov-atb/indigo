package com.indigo.flow

import co.paralleluniverse.fibers.Suspendable
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.InitiatingFlow
import net.corda.core.identity.Party
import net.corda.core.utilities.unwrap

@InitiatingFlow
class EstablishMasterSecret(val oracle: Party, val masterSecret: String) : FlowLogic<Unit>() {
    @Suspendable override fun call() = initiateFlow(oracle).sendAndReceive<Unit>(masterSecret).unwrap { it }
}