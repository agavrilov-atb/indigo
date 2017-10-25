package com.indigo.oracle.service

import com.beust.klaxon.JsonObject
import net.corda.core.node.ServiceHub
import net.corda.core.node.services.CordaService
import net.corda.core.serialization.SingletonSerializeAsToken
import org.hyperledger.indy.sdk.IndyException
import org.hyperledger.indy.sdk.LibIndy
import org.hyperledger.indy.sdk.ledger.Ledger
import org.hyperledger.indy.sdk.pool.Pool
import org.hyperledger.indy.sdk.signus.Signus
import org.hyperledger.indy.sdk.signus.SignusJSONParameters
import org.hyperledger.indy.sdk.wallet.Wallet
import java.io.File
import org.hyperledger.indy.sdk.pool.PoolJSONParameters.OpenPoolLedgerJSONParameter
import org.hyperledger.indy.sdk.pool.PoolJSONParameters.CreatePoolLedgerConfigJSONParameter
import com.beust.klaxon.Parser
import com.beust.klaxon.obj
import com.beust.klaxon.string
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.verifierVerifyProof
import org.json.simple.JSONObject
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverCreateProof
import org.json.simple.JSONArray
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverGetClaimsForProofReq
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverStoreClaim
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.issuerCreateClaim
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverCreateAndStoreClaimReq
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverGetClaimOffers
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverStoreClaimOffer
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverCreateMasterSecret
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.issuerCreateAndStoreClaimDef


@CordaService
class Oracle(val services: ServiceHub) : SingletonSerializeAsToken() {
    private val poolName = "localhost"
    private val issuerWalletName = "issuerWallet"
    private val proverWalletName = "trusteeWallet"
    private val txn = "/Users/austinmoothart/dev/project-indigo/oracle-service/lib/localhost.txn"

    private val issuerDid = "W4SGRU86Z58d6TV7PBUe6g"
    private val trusteeDid = "V4SGRU86Z58d6TV7PBUe6f"
    private val trusteeVerkey = "GJ1SzoWzavQYfNL9XkaJdrQejfztN4XqdsiV4ct3LXKL"
    private val trusteeSeed = "000000000000000000000000Trustee1"

    fun generateDID(): String {
        println("=== BEGIN DID GENERATION ===")
        initializeSovrin()

        println("=== OPEN POOL ===")
        val openPoolLedgerJSONParameter = OpenPoolLedgerJSONParameter(java.lang.Boolean.TRUE, null, null)
        println("OpenPoolLedgerJSONParameter: " + openPoolLedgerJSONParameter)
        val pool = Pool.openPoolLedger(poolName, openPoolLedgerJSONParameter.toJson()).get()

        println("=== OPEN TRUSTEE WALLET ===")
        var trusteeWallet = Wallet.openWallet(proverWalletName, null, null).get()
        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()

        println("=== CREATE TRUSTEE DID ===")
        val createAndStoreMyDidJSONParameterTrustee = SignusJSONParameters.CreateAndStoreMyDidJSONParameter(null, trusteeSeed, null, null)
        println("CreateAndStoreMyDidJSONParameterTrustee: " + createAndStoreMyDidJSONParameterTrustee)
        val createAndStoreMyDidResultTrustee = Signus.createAndStoreMyDid(trusteeWallet, createAndStoreMyDidJSONParameterTrustee.toJson()).get()
        val newDid = createAndStoreMyDidResultTrustee.did
        val newVerkey = createAndStoreMyDidResultTrustee.verkey

        println("=== CREATE NYM REQUEST ===")
        val buildNymRequestResult = Ledger.buildNymRequest(trusteeDid, this.issuerDid, trusteeVerkey, null, null).get()
        println("BuildNymRequestResult: " + buildNymRequestResult)

        println("=== SUBMIT ===")
        val submitRequestResult = Ledger.signAndSubmitRequest(pool, trusteeWallet, trusteeDid, buildNymRequestResult).get()
        println("SubmitRequestResult: " + submitRequestResult)
        val parser: Parser = Parser()
        val json: JsonObject = parser.parse(StringBuilder(submitRequestResult)) as JsonObject
        println("SubmitRequestResult: " + json)
        val savedDid = json.obj("result")?.string("dest") ?: ""
        val savedVerkey = json.obj("result")?.string("verkey") ?: ""

        if(newDid != savedDid) {
            //throw exception?
        }

        if(newVerkey != savedVerkey) {
            //throw exception?
        }

        closeSovrin(issuerWallet, trusteeWallet, pool)

        println("=== FINISHED DID GENERATION ===")
        return savedDid
    }

    fun buildSchema(): String {
        println("=== BEGIN SCHEMA CREATION ===")
        initializeSovrin()

        //1. Create and Open Pool
        val pool = Pool.openPoolLedger(poolName, "{}").get()

        //2. Issuer Create and Open Wallet
        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()

        //3. Prover Create and Open Wallet
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        //4. Issuer create ClaimDef
        val schemaJson = "{\n" +
                "                    \"seqNo\":1,\n" +
                "                    \"data\": {\n" +
                "                        \"name\":\"gvt\",\n" +
                "                        \"version\":\"1.0\",\n" +
                "                        \"keys\":[\"age\",\"sex\",\"height\",\"name\"]\n" +
                "                    }\n" +
                "                }"
        println("=== CREATE AND STORE SCHEMA ===")
        val claimDef = issuerCreateAndStoreClaimDef(issuerWallet, issuerDid, schemaJson, null, false).get()

        println("=== FINISHED SCHEMA CREATION ===")
        return claimDef
    }

    private fun initializeSovrin() {
        println("=== INITIALIZE indy-sdk ===")
        if (!LibIndy.isInitialized()) {
            LibIndy.init(File("oracle-service/lib/libindy.dylib"))
        }

        println("=== INITIALIZE SOVRIN CONFIG ===")
        createPoolConfig(poolName, txn)
        createWallet(poolName, issuerWalletName)
        createWallet(poolName, proverWalletName)
    }

    private fun closeSovrin(issuerWallet: Wallet, proverWallet: Wallet, pool: Pool) {
        println("=== CLOSE SOVRIN CONNECTION ===")
        issuerWallet.closeWallet().get()
        Wallet.deleteWallet(issuerWalletName, null).get()

        proverWallet.closeWallet().get()
        Wallet.deleteWallet(proverWalletName, null).get()

        pool.closePoolLedger().get()
    }

    private fun createWallet(poolName: String, name: String) {
        try {
            println("=== CREATE $name WALLET ===")
            val createdWallet = Wallet.createWallet(poolName, name, "default", null, null).get()
            println("Created $name Wallet: $createdWallet")
        } catch (e: Exception) {
            if(e.cause!!::class.java.equals(IndyException::class.java)
                    && (e.cause as IndyException).errorCode.toString() == "WalletAlreadyExistsError") {
                println("$name already exists, continuing")
            } else {
                throw e
            }
        }
    }

    private fun createPoolConfig(poolName: String, txn: String) {
        try {
            println("=== CREATE POOL ===")
            val createPoolLedgerConfigJSONParameter = CreatePoolLedgerConfigJSONParameter(txn)
            println("CreatePoolLedgerConfigJSONParameter: " + createPoolLedgerConfigJSONParameter)
            Pool.createPoolLedgerConfig(poolName, createPoolLedgerConfigJSONParameter.toJson()).get()
        } catch (e: Exception) {
            if(e.cause!!::class.java.equals(IndyException::class.java)
                    && (e.cause as IndyException).errorCode.toString() == "PoolLedgerConfigAlreadyExistsError") {
                println("Ledger config already exists, continuing")
            } else {
                throw e
            }
        }
    }
}

////5. Prover create Master Secret
//val masterSecret = "masterSecretName"
//proverCreateMasterSecret(proverWallet, masterSecret).get()
//
////6. Prover store Claim Offer
//val claimOffer = String.format("{\"issuer_did\":\"%s\", \"schema_seq_no\":%d}", issuerDid, 1)
//proverStoreClaimOffer(proverWallet, claimOffer).get()
//
////7. Prover get Claim Offers
//val claimOfferFilter = String.format("{\"issuer_did\":\"%s\"}", issuerDid)
//val claimOffersJson = proverGetClaimOffers(proverWallet, claimOfferFilter).get()
//
//val claimOffersObject = JSONArray(claimOffersJson)
//assertEquals(claimOffersObject.length(), 1)
//
//val claimOfferObject = claimOffersObject.getJSONObject(0)
//val claimOfferJson = claimOfferObject.toString()
//
////8. Prover create ClaimReq
//val proverDid = "BzfFCYk"
//val claimReq = proverCreateAndStoreClaimReq(proverWallet, proverDid, claimOfferJson, claimDef, masterSecret).get()
//assertNotNull(claimReq)
//
////9. Issuer create Claim
//val claimAttributesJson = "{\n" +
//        "               \"sex\":[\"male\",\"5944657099558967239210949258394887428692050081607692519917050011144233115103\"],\n" +
//        "               \"name\":[\"Alex\",\"1139481716457488690172217916278103335\"],\n" +
//        "               \"height\":[\"175\",\"175\"],\n" +
//        "               \"age\":[\"28\",\"28\"]\n" +
//        "        }"
//
//val createClaimResult = issuerCreateClaim(issuerWallet, claimReq, claimAttributesJson, -1).get()
//val claimJson = createClaimResult.claimJson
//
////10. Prover store Claim
//proverStoreClaim(proverWallet, claimJson).get()
//
////11. Prover gets Claims for Proof Request
//val proofRequestJson = "{\n" +
//        "                          \"nonce\":\"123432421212\",\n" +
//        "                          \"name\":\"proof_req_1\",\n" +
//        "                          \"version\":\"0.1\",\n" +
//        "                          \"requested_attrs\":{\"attr1_uuid\":{\"schema_seq_no\":1,\"name\":\"name\"},\n" +
//        "                                                \"attr2_uuid\":{\"schema_seq_no\":1,\"name\":\"sex\"}},\n" +
//        "                          \"requested_predicates\":{\"predicate1_uuid\":{\"attr_name\":\"age\",\"p_type\":\"GE\",\"value\":18}}\n" +
//        "                  }"
//
//val claimsForProofJson = proverGetClaimsForProofReq(proverWallet, proofRequestJson).get()
//
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
//
////12. Prover create Proof
//val selfAttestedValue = "yes"
//val requestedClaimsJson = String.format("{\n" +
//        "                                          \"self_attested_attributes\":{\"self1\":\"%s\"},\n" +
//        "                                          \"requested_attrs\":{\"attr1_uuid\":[\"%s\", true],\n" +
//        "                                                               \"attr2_uuid\":[\"%s\", false]},\n" +
//        "                                          \"requested_predicates\":{\"predicate1_uuid\":\"%s\"}\n" +
//        "                                        }", selfAttestedValue, claimUuid, claimUuid, claimUuid)
//
//val schemasJson = String.format("{\"%s\":%s}", claimUuid, schemaJson)
//val claimDefsJson = String.format("{\"%s\":%s}", claimUuid, claimDef)
//val revocRegsJson = "{}"
//
//
//val proofJson = proverCreateProof(proverWallet, proofRequestJson, requestedClaimsJson, schemasJson,
//        masterSecret, claimDefsJson, revocRegsJson).get()
//
//val proof = JSONObject(proofJson)
//
////13. Verifier verify Proof
//assertEquals("Alex",
//proof.getJSONObject("requested_proof").getJSONObject("revealed_attrs").getJSONArray("attr1_uuid").getString(1))
//
//assertNotNull(proof.getJSONObject("requested_proof").getJSONObject("unrevealed_attrs").getString("attr2_uuid"))
//
//assertEquals(selfAttestedValue, proof.getJSONObject("requested_proof").getJSONObject("self_attested_attrs").getString("self1"))
//
//val valid = verifierVerifyProof(proofRequestJson, proofJson, schemasJson, claimDefsJson, revocRegsJson).get()
//assertTrue(valid)