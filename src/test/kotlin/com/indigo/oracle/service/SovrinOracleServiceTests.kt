package com.indigo.oracle.service

import net.corda.testing.CHARLIE_KEY
import net.corda.testing.TestDependencyInjectionBase
import net.corda.testing.node.MockServices
import org.junit.Test
import kotlin.test.assertNotNull

class SovrinOracleServiceTests : TestDependencyInjectionBase() {
    private val dummyServices = MockServices(listOf("com.indigo.contract"), CHARLIE_KEY)
    private val oracle = Oracle(dummyServices)

    @Test
    fun `generate a did`() {
        val did = oracle.generateDID()
        assertNotNull(did, "Generated DID was null")
    }

    @Test
    fun `create a data schema`() {
        val schema = oracle.buildSchema()
        assertNotNull(schema, "Built schema was null")
    }
}