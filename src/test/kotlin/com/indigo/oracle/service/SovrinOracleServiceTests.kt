package com.indigo.oracle.service

import net.corda.testing.CHARLIE_KEY
import net.corda.testing.TestDependencyInjectionBase
import net.corda.testing.node.MockServices
import org.hyperledger.indy.sdk.anoncreds.Anoncreds
import org.junit.Test
import kotlin.test.assertNotNull

class SovrinOracleServiceTests : TestDependencyInjectionBase() {
    private val dummyServices = MockServices(listOf("com.indigo.contract"), CHARLIE_KEY)
    private val oracle = Oracle(dummyServices)

    val schema = "{\n" +
            "                    \"seqNo\":1,\n" +
            "                    \"data\": {\n" +
            "                        \"name\":\"gvt\",\n" +
            "                        \"version\":\"1.0\",\n" +
            "                        \"keys\":[\"age\",\"sex\",\"height\",\"name\"]\n" +
            "                    }\n" +
            "                }"
    val claimDef = "foo" //TODO
    val masterSecret = "mastersecret"
    val issuerDid = "W4SGRU86Z58d6TV7PBUe6g"
    val claimOffer = "{\"issuer_did\":\"$issuerDid\", \"schema_seq_no\":1}"
    val claimAttributes = "{\n" +
            "               \"sex\":[\"male\",\"5944657099558967239210949258394887428692050081607692519917050011144233115103\"],\n" +
            "               \"name\":[\"Alex\",\"1139481716457488690172217916278103335\"],\n" +
            "               \"height\":[\"175\",\"175\"],\n" +
            "               \"age\":[\"28\",\"28\"]\n" +
            "        }"
    val proofRequest = "{\n" +
            "                          \"nonce\":\"123432421212\",\n" +
            "                          \"name\":\"proof_req_1\",\n" +
            "                          \"version\":\"0.1\",\n" +
            "                          \"requested_attrs\":{\"attr1_uuid\":{\"schema_seq_no\":1,\"name\":\"name\"},\n" +
            "                                                \"attr2_uuid\":{\"schema_seq_no\":1,\"name\":\"sex\"}},\n" +
            "                          \"requested_predicates\":{\"predicate1_uuid\":{\"attr_name\":\"age\",\"p_type\":\"GE\",\"value\":18}}\n" +
            "                  }"
    val selfAttestedValue = "yes"
    var claimUuid = "FOOUUID" //TODO: pull from proof request
    val requestedClaims = String.format("{\n" +
            "                                          \"self_attested_attributes\":{\"self1\":\"%s\"},\n" +
            "                                          \"requested_attrs\":{\"attr1_uuid\":[\"%s\", true],\n" +
            "                                                               \"attr2_uuid\":[\"%s\", false]},\n" +
            "                                          \"requested_predicates\":{\"predicate1_uuid\":\"%s\"}\n" +
            "                                        }", selfAttestedValue, claimUuid, claimUuid, claimUuid)

    val schemas = String.format("{\"%s\":%s}", claimUuid, schema)
    val claimDefs = String.format("{\"%s\":%s}", claimUuid, claimDef)
    val revocRegs = "{}"

    @Test
    fun `generate a did`() {
        val did = oracle.generateDID()
        println("did: $did")
        assertNotNull(did, "Generated DID was null")
    }

    @Test
    fun `create a data schema`() {
        val newClaimDef = oracle.buildSchema(schema)
        println("new data schema: $newClaimDef")
        //TODO: save this claimDef for future tests
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
        println("retrieved data schema: $schema")
        assertNotNull(schema, "Retrieved claim definition was null")
        //TODO: test for non empty result
    }

    @Test
    fun `create claim request`() {
        var claimRequest = oracle.createClaimRequest(claimOffer, claimDef, masterSecret)
        println("claim request: $claimRequest")
        assertNotNull(claimRequest, "Retrieved claim request was null")
    }

    @Test
    fun `issuer create claim`() {
        var issuerClaim = oracle.issuerCreateClaim("foo", claimAttributes) //TODO: claimReq
        println("issuer claim: $issuerClaim")
        assertNotNull(issuerClaim, "Retrieved issuers claim request was null")
    }

    @Test
    fun `prover store claim`() {
        var issuerClaim = oracle.proverStoreClaim("foo") //TODO: claim
        //TODO: test for non empty result
    }

    @Test
    fun `claims for proof request`() {
        var claimsForProof = oracle.claimsForProofReq(proofRequest)
        println("proof request: $claimsForProof")
        assertNotNull(claimsForProof, "Claims for proof request was null")
        //TODO: more json checks
        //val claimsForProof = JSONObject(claimsForProofJson)
        //val claimsForAttribute1 = claimsForProof.getJSONObject("attrs").getJSONArray("attr1_uuid")
        //val claimsForAttribute2 = claimsForProof.getJSONObject("attrs").getJSONArray("attr1_uuid")
        //val claimsForPredicate = claimsForProof.getJSONObject("predicates").getJSONArray("predicate1_uuid")
        //
        //assertEquals(claimsForAttribute1.length(), 1)
        //assertEquals(claimsForAttribute2.length(), 1)
        //assertEquals(claimsForPredicate.length(), 1)
        //
        //val claimUuid = claimsForAttribute1.getJSONObject(0).getString("claim_uuid")
    }

    @Test
    fun `prover create proof`() {
        var proof = oracle.proverCreateProof(proofRequest, requestedClaims, schemas, masterSecret, claimDefs, revocRegs)
        println("proof: $proof")
        assertNotNull(proof, "Proof was null")
        //TODO: more json checks
//        assertEquals("Alex", proof.getJSONObject("requested_proof").getJSONObject("revealed_attrs").getJSONArray("attr1_uuid").getString(1))
//
//        assertNotNull(proof.getJSONObject("requested_proof").getJSONObject("unrevealed_attrs").getString("attr2_uuid"))
//
//        assertEquals(selfAttestedValue, proof.getJSONObject("requested_proof").getJSONObject("self_attested_attrs").getString("self1"))
//
//        val valid = Anoncreds.verifierVerifyProof(proofRequestJson, proofJson, schemasJson, claimDefsJson, revocRegsJson).get()
//        assertTrue(valid)
    }


}