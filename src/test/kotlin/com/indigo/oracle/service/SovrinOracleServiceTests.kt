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
        println("did: $did")
        assertNotNull(did, "Generated DID was null")
    }

    @Test
    fun `create a data schema`() {
        val newSchema = oracle.buildSchema()
        println("new data schema: $newSchema")
        assertNotNull(newSchema, "Built schema was null")
    }

    @Test
    fun `establish a prover master secret`() {
        oracle.establishMasterSecret("mastersecret")
        //TODO: how to test Unit response?
    }

    @Test
    fun `get a data schema`() {
        val schema = oracle.getSchema()
        println("retrieved data schema: $schema")
        assertNotNull(schema, "Retrieved schema was null")
        //TODO: test for non empty result
    }
}