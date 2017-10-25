package com.indigo.oracle.service

import net.corda.testing.CHARLIE_KEY
import net.corda.testing.TestDependencyInjectionBase
import net.corda.testing.node.MockServices
import org.junit.Test
import kotlin.test.assertNotNull

class SovrinOracleServiceTests : TestDependencyInjectionBase() {
    private val dummyServices = MockServices(listOf("com.indigo.contract"), CHARLIE_KEY)
    private val oracle = Oracle(dummyServices)

    val claimDef = "{\n" +
            "                    \"seqNo\":1,\n" +
            "                    \"data\": {\n" +
            "                        \"name\":\"gvt\",\n" +
            "                        \"version\":\"1.0\",\n" +
            "                        \"keys\":[\"age\",\"sex\",\"height\",\"name\"]\n" +
            "                    }\n" +
            "                }"
    val masterSecret = "mastersecret"
    val issuerDid = "W4SGRU86Z58d6TV7PBUe6g"
    val claimOffer = "{\"issuer_did\":\"$issuerDid\", \"schema_seq_no\":1}"

    @Test
    fun `generate a did`() {
        val did = oracle.generateDID()
        println("did: $did")
        assertNotNull(did, "Generated DID was null")
    }

    @Test
    fun `create a data schema`() {
        val newClaimDef = oracle.buildSchema(claimDef)
        println("new data schema: $newClaimDef")
        assertNotNull(newClaimDef, "Built claim definition was null")
    }

    @Test
    fun `establish a prover master secret`() {
        oracle.establishMasterSecret(masterSecret)
        //TODO: how to test Unit response?
    }

    @Test
    fun `store claim offer`() {
        oracle.storeClaimOffer(claimOffer)
        //TODO: how to test Unit response?
    }

    @Test
    fun `get a data schema`() {
        val schema = oracle.getSchema()
        println("retrieved data schema: $claimDef")
        assertNotNull(schema, "Retrieved claim definition was null")
        //TODO: test for non empty result
    }

    @Test
    fun `create claim request`() {
        var claimRequest = oracle.createClaimRequest(claimOffer, claimDef, masterSecret)
        assertNotNull(claimRequest, "Retrieved claim request was null")
    }
}