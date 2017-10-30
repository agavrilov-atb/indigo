package com.indigo.oracle.service

import com.beust.klaxon.*
import net.corda.testing.TestDependencyInjectionBase
import org.hyperledger.indy.sdk.IndyException
import org.hyperledger.indy.sdk.LibIndy
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.*
import org.hyperledger.indy.sdk.pool.Pool
import org.hyperledger.indy.sdk.pool.PoolJSONParameters
import org.hyperledger.indy.sdk.wallet.Wallet
import org.junit.Test
import java.io.File
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertTrue


class AnonCredsDemoTest : TestDependencyInjectionBase() {
    @Test
    fun `anon creds demo`() {
        println("Anoncreds sample -> started")

        val parser = Parser()
        val poolName = "localhost"
        val issuerWalletName = "issuerWallet"
        val proverWalletName = "proverWallet"
        val txn = "/Users/austinmoothart/dev/project-indigo/oracle-service/lib/localhost.txn"

        //1. Create and Open Pool
        println("=== INITIALIZE indy-sdk ===")
        if (!LibIndy.isInitialized()) {
            LibIndy.init(File("oracle-service/lib/libindy.dylib"))
        }

        println("=== INITIALIZE SOVRIN CONFIG ===")
        createPoolConfig(poolName, txn)
        val pool = Pool.openPoolLedger(poolName, "{}").get()

        createWallet(poolName, issuerWalletName)
        createWallet(poolName, proverWalletName)

        //2. Issuer Create and Open Wallet
        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()

        //3. Prover Create and Open Wallet
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        //4. Issuer create ClaimDef
        val schemaJson = "{\"seqNo\":1,\"data\": {\"name\":\"gvt\",\"version\":\"1.0\",\"keys\":[\"age\",\"sex\",\"height\",\"name\"]}}"
        val issuerDid = "NcYxiDXkpYi6ov5FcYDi1e"

        val claimDef = issuerCreateAndStoreClaimDef(issuerWallet, issuerDid, schemaJson, null, false).get()

        //5. Prover create Master Secret
        val masterSecret = "masterSecretName"
        try {
            proverCreateMasterSecret(proverWallet, masterSecret).get()
        } catch (e: Exception) {
            if(e.cause!!::class.java.equals(IndyException::class.java)
                    && (e.cause as IndyException).errorCode.toString() == "AnoncredsMasterSecretDuplicateNameError") {
                println("MasterSecret already exists, continuing")
            } else {
                throw e
            }
        }

        //6. Prover store Claim Offer
        val claimOffer = String.format("{\"issuer_did\":\"%s\", \"schema_seq_no\":%d}", issuerDid, 1)
        proverStoreClaimOffer(proverWallet, claimOffer).get()

        //7. Prover get Claim Offers
        val claimOfferFilter = String.format("{\"issuer_did\":\"%s\"}", issuerDid)
        val claimOffersJson = proverGetClaimOffers(proverWallet, claimOfferFilter).get()

        val claimOffersObject = parser.parse(StringBuilder(claimOffersJson)) as JsonArray<JsonObject>
        println("${claimOffersObject.size} claim offers are present")
        assert(claimOffersObject.size >= 1)

        val claimOfferObject = claimOffersObject.get(0)
        val claimOfferJson = claimOfferObject.toJsonString()

        //8. Prover create ClaimReq
        val proverDid = "BzfFCYk"
        val claimReq = proverCreateAndStoreClaimReq(proverWallet, proverDid, claimOfferJson, claimDef, masterSecret).get()
        assertNotNull(claimReq, "claim request was null")

        //9. Issuer create Claim
        val claimAttributesJson = "{\"sex\":[\"male\",\"5944657099558967239210949258394887428692050081607692519917050011144233115103\"],\"name\":[\"Alex\",\"1139481716457488690172217916278103335\"],\"height\":[\"175\",\"175\"],\"age\":[\"28\",\"28\"]}"

        val createClaimResult = issuerCreateClaim(issuerWallet, claimReq, claimAttributesJson, -1).get()
        val claimJson = createClaimResult.claimJson

        //10. Prover store Claim
        proverStoreClaim(proverWallet, claimJson).get()

        //11. Prover gets Claims for Proof Request
        val proofRequestJson = "{\"nonce\":\"123432421212\",\"name\":\"proof_req_1\",\"version\":\"0.1\",\"requested_attrs\":{\"attr1_uuid\":{\"schema_seq_no\":1,\"name\":\"name\"},\"attr2_uuid\":{\"schema_seq_no\":1,\"name\":\"sex\"}},\"requested_predicates\":{\"predicate1_uuid\":{\"attr_name\":\"age\",\"p_type\":\"GE\",\"value\":18}}}"

        val claimsForProofJson = proverGetClaimsForProofReq(proverWallet, proofRequestJson).get()

        val claimsForProof = parser.parse(StringBuilder(claimsForProofJson)) as JsonObject
        val claimsForAttribute1 = claimsForProof.obj("attrs")?.array<JsonObject>("attr1_uuid")
        val claimsForAttribute2 = claimsForProof.obj("attrs")?.array<JsonObject>("attr1_uuid")
        val claimsForPredicate = claimsForProof.obj("predicates")?.array<JsonObject>("predicate1_uuid")

        assertTrue(claimsForAttribute1?.size ?: 0 > 0)
        assertTrue(claimsForAttribute2?.size ?: 0 > 0)
        assertTrue(claimsForPredicate?.size ?: 0 > 0)

        val claimUuid = claimsForAttribute1?.first()?.get("claim_uuid").toString()

        //12. Prover create Proof
        val selfAttestedValue = "yes"
        val requestedClaimsJson = "{\"self_attested_attributes\":{\"self1\":\"$selfAttestedValue\"},\"requested_attrs\":{\"attr1_uuid\":[\"$claimUuid\", true],\"attr2_uuid\":[\"$claimUuid\", false]},\"requested_predicates\":{\"predicate1_uuid\":\"$claimUuid\"}}"

        val schemasJson = "{\"$claimUuid\":$schemaJson}"
        val claimDefsJson = "{\"$claimUuid\":$claimDef}"
        val revocRegsJson = "{}"


        val proofJson = proverCreateProof(proverWallet, proofRequestJson, requestedClaimsJson, schemasJson,
                masterSecret, claimDefsJson, revocRegsJson).get()

        val proof = parser.parse(StringBuilder(proofJson)) as JsonObject

        //13. Verifier verify Proof
        assertEquals("Alex",
                proof.obj("requested_proof")?.obj("revealed_attrs")?.array<String>("attr1_uuid")?.get(1))

        assertNotNull(proof.obj("requested_proof")?.obj("unrevealed_attrs")?.get("attr2_uuid"))

        assertEquals(selfAttestedValue, proof.obj("requested_proof")?.obj("self_attested_attrs")?.get("self1"))

        val valid = verifierVerifyProof(proofRequestJson, proofJson, schemasJson, claimDefsJson, revocRegsJson).get()
        assertTrue(valid)

        //14. Close and Delete issuer wallet
        issuerWallet.closeWallet().get()
        Wallet.deleteWallet(issuerWalletName, null).get()

        //15. Close and Delete prover wallet
        proverWallet.closeWallet().get()
        Wallet.deleteWallet(proverWalletName, null).get()

        //16. Close pool
        pool.closePoolLedger().get()

        //17. Delete Pool ledger config
        Pool.deletePoolLedgerConfig(poolName).get()

        println("Anoncreds sample -> completed")

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
            val createPoolLedgerConfigJSONParameter = PoolJSONParameters.CreatePoolLedgerConfigJSONParameter(txn)
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