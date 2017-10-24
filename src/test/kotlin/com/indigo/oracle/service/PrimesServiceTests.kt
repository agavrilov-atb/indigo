package com.indigo.oracle.service

import com.indigo.contract.DIDContract
import com.indigo.contract.DIDState
import com.indigo.contract.DID_PROGRAM_ID
import net.corda.core.contracts.Command
import net.corda.core.contracts.StateAndContract
import net.corda.core.transactions.TransactionBuilder
import net.corda.testing.CHARLIE
import net.corda.testing.CHARLIE_KEY
import net.corda.testing.DUMMY_NOTARY
import net.corda.testing.TestDependencyInjectionBase
import net.corda.testing.node.MockServices
import org.junit.Test
import java.util.function.Predicate
import kotlin.test.assertNotNull

class PrimesServiceTests : TestDependencyInjectionBase() {
    private val dummyServices = MockServices(listOf("com.indigo.contract"), CHARLIE_KEY)
    private val oracle = Oracle(dummyServices)

    @Test
    fun `generate a did`() {
        val command = Command(DIDContract.Commands.Generate(), listOf(CHARLIE.owningKey))
        val state = DIDState("foo", CHARLIE)
        val stateAndContract = StateAndContract(state, DID_PROGRAM_ID)
        val ftx = TransactionBuilder(DUMMY_NOTARY)
                .withItems(stateAndContract, command)
                .toWireTransaction(oracle.services)
                .buildFilteredTransaction(Predicate {
                    when (it) {
                        is Command<*> -> oracle.services.myInfo.legalIdentities.first().owningKey in it.signers && it.value is DIDContract.Commands.Generate
                        else -> false
                    }
                })
        val did = oracle.generateDID()
        assertNotNull(did, "Generated DID was null")
    }
}