package com.indigo.contract

import com.indigo.state.SovrinTrustState
import net.corda.core.contracts.*
import net.corda.core.contracts.Requirements.using
import net.corda.core.transactions.LedgerTransaction

/**
 * Created by nxshah5 on 11/9/17.
 */


open class TrustContract : Contract {

    companion object {
        const val TRUST_PROGRAM_ID: ContractClassName = "com.indigo.contract.TrustContract"
    }
    interface Commands: CommandData {

        class Issue: TypeOnlyCommandData(), Commands
        class Establish:TypeOnlyCommandData(), Commands

    }

    override fun verify(tx: LedgerTransaction) {

        val groups = tx.groupStates(SovrinTrustState::javaClass)
        val command = tx.commands.requireSingleCommand<Commands>()

        for ((inputs, outputs, _) in groups) {


            when (command.value) {


                is Commands.Issue -> {
                    val output = outputs.single();
                    requireThat {
                        "There is no input" using inputs.isEmpty()
                        "There is only 1 output" using (outputs.size == 1)
                        "other party data is empty at this time" using (output.otherPartyDID == null
                                                                        && output.otherParty == null && output.pairwiseDID == null)
                    }
                }

                is Commands.Establish -> {
                  //  val input = inputs.single();
                    val output = outputs.single();
                    requireThat {

                        "There is only 1 output" using (outputs.size == 1)
                        "There is only 0 input" using (inputs.size == 0)
                        "Other party data should exist" using (output.otherPartyDID!=null && output.otherParty!=null && output.pairwiseDID!=null)

                    }


                }
            }

        }
    }


}