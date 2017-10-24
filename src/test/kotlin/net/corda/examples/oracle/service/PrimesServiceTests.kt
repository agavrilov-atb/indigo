package net.corda.examples.oracle.service

import com.indigo.contract.*
import net.corda.core.contracts.Command
import net.corda.core.contracts.StateAndContract
import net.corda.core.transactions.TransactionBuilder
import net.corda.examples.oracle.service.service.Oracle
import net.corda.testing.*
import net.corda.testing.node.MockServices
import org.junit.Test
import java.util.function.Predicate
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertNotNull

class PrimesServiceTests : TestDependencyInjectionBase() {
    private val dummyServices = MockServices(listOf("com.indigo.contract"), CHARLIE_KEY)
    private val oracle = Oracle(dummyServices)

    @Test
    fun `oracle returns correct Nth prime`() {
        assertEquals(104729, oracle.query(10000))
    }

    @Test
    fun `oracle rejects invalid values of N`() {
        assertFailsWith<IllegalArgumentException> { oracle.query(0) }
        assertFailsWith<IllegalArgumentException> { oracle.query(-1) }
    }

    @Test
    fun `oracle signs transactions including a valid prime`() {
        val command = Command(PrimeContract.Create(10, 29), listOf(CHARLIE.owningKey))
        val state = PrimeState(10, 29, ALICE)
        val stateAndContract = StateAndContract(state, PRIME_PROGRAM_ID)
        val ftx = TransactionBuilder(DUMMY_NOTARY)
                .withItems(stateAndContract, command)
                .toWireTransaction(dummyServices)
                .buildFilteredTransaction(Predicate {
                    when (it) {
                        is Command<*> -> oracle.services.myInfo.legalIdentities.first().owningKey in it.signers && it.value is PrimeContract.Create
                        else -> false
                    }
                })
        val signature = oracle.sign(ftx)
        assert(signature.verify(ftx.id))
    }

    @Test
    fun `oracle does not sign transactions including an invalid prime`() {
        val command = Command(PrimeContract.Create(10, 1000), listOf(CHARLIE.owningKey))
        val state = PrimeState(10, 29, ALICE)
        val stateAndContract = StateAndContract(state, PRIME_PROGRAM_ID)
        val ftx = TransactionBuilder(DUMMY_NOTARY)
                .withItems(stateAndContract, command)
                .toWireTransaction(oracle.services)
                .buildFilteredTransaction(Predicate {
                    when (it) {
                        is Command<*> -> oracle.services.myInfo.legalIdentities.first().owningKey in it.signers && it.value is PrimeContract.Create
                        else -> false
                    }
                })
        assertFailsWith<IllegalArgumentException> { oracle.sign(ftx) }
    }

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