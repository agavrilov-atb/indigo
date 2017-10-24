package com.indigo.contract

import net.corda.core.contracts.*
import net.corda.core.contracts.Requirements.using
import net.corda.core.identity.AbstractParty
import net.corda.core.transactions.LedgerTransaction

const val DID_PROGRAM_ID: ContractClassName = "com.indigo.contract.DIDContract"

class DIDContract : Contract {

    interface Commands : CommandData {
        class Generate : TypeOnlyCommandData(), Commands
    }

    override fun verify(tx: LedgerTransaction) {
        "There are no inputs" using (tx.inputs.isEmpty())
//        val output = tx.outputsOfType<DIDState>().single() do we need to track DID state?
        val command = tx.commands.requireSingleCommand<Commands.Generate>().value
        "There should only be 1 output" using (tx.outputs.size == 1)
    }

}

data class DIDState(val did: String,
                    val requester: AbstractParty) : ContractState {
    override val participants: List<AbstractParty> get() = listOf(requester)
    override fun toString() = "The DID is $did"
}