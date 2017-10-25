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
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverCreateMasterSecret
import org.hyperledger.indy.sdk.anoncreds.AnoncredsResults

@CordaService
class Oracle(val services: ServiceHub) : SingletonSerializeAsToken() {
    private val poolName = "localhost"
    private val issuerWalletName = "issuerWallet"
    private val proverWalletName = "proverWallet"
    private val txn = "/Users/austinmoothart/dev/project-indigo/oracle-service/lib/localhost.txn"

    private val issuerDid = "W4SGRU86Z58d6TV7PBUe6g"
    private val proverDid = "V4SGRU86Z58d6TV7PBUe6f"
    private val proverVerkey = "GJ1SzoWzavQYfNL9XkaJdrQejfztN4XqdsiV4ct3LXKL"
    private val proverSeed = "000000000000000000000000Trustee1"


    fun generateDID(): String {
        println("=== BEGIN DID GENERATION ===")
        initializeSovrin()

        println("=== OPEN POOL ===")
        val openPoolLedgerJSONParameter = OpenPoolLedgerJSONParameter(java.lang.Boolean.TRUE, null, null)
        println("OpenPoolLedgerJSONParameter: " + openPoolLedgerJSONParameter)
        val pool = Pool.openPoolLedger(poolName, openPoolLedgerJSONParameter.toJson()).get()

        println("=== OPEN PROVER WALLET ===")
        var proverWallet = Wallet.openWallet(proverWalletName, null, null).get()
        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()

        println("=== CREATE PROVER DID ===")
        val createAndStoreMyDidJSONParameterTrustee = SignusJSONParameters.CreateAndStoreMyDidJSONParameter(null, proverSeed, null, null)
        println("CreateAndStoreMyDidJSONParameterTrustee: " + createAndStoreMyDidJSONParameterTrustee)
        val createAndStoreMyDidResultTrustee = Signus.createAndStoreMyDid(proverWallet, createAndStoreMyDidJSONParameterTrustee.toJson()).get()
        val newDid = createAndStoreMyDidResultTrustee.did
        val newVerkey = createAndStoreMyDidResultTrustee.verkey

        println("=== CREATE NYM REQUEST ===")
        val buildNymRequestResult = Ledger.buildNymRequest(proverDid, this.issuerDid, proverVerkey, null, null).get()
        println("BuildNymRequestResult: " + buildNymRequestResult)

        println("=== SUBMIT ===")
        val submitRequestResult = Ledger.signAndSubmitRequest(pool, proverWallet, proverDid, buildNymRequestResult).get()
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

        closeSovrin(issuerWallet, proverWallet, pool)

        println("=== FINISHED DID GENERATION ===")
        return savedDid
    }

    fun buildSchema(schema: String): String {
        println("=== BEGIN SCHEMA CREATION ===")
        initializeSovrin()

        val pool = Pool.openPoolLedger(poolName, "{}").get()

        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        println("=== CREATE AND STORE SCHEMA ===")
        val claimDef = issuerCreateAndStoreClaimDef(issuerWallet, issuerDid, schema, null, false).get()

        closeSovrin(issuerWallet, proverWallet, pool)

        println("=== FINISHED SCHEMA CREATION ===")
        return claimDef
    }

    fun establishMasterSecret(masterSecret: String) {
        println("=== BEGIN SCHEMA CREATION ===")
        initializeSovrin()

        val pool = Pool.openPoolLedger(poolName, "{}").get()

        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        println("=== ESTABLISH MASTER SECRET ===")
        proverCreateMasterSecret(proverWallet, masterSecret).get()

        closeSovrin(issuerWallet, proverWallet, pool)
    }

    fun storeClaimOffer(claimOffer: String) {
        println("=== BEGIN STORE CLAIM OFFER ===")
        initializeSovrin()

        val pool = Pool.openPoolLedger(poolName, "{}").get()

        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        println("=== STORE CLAIM OFFER ===")
        proverStoreClaimOffer(proverWallet, claimOffer).get()

        closeSovrin(issuerWallet, proverWallet, pool)
    }

    fun getSchema(): String {
        println("=== BEGIN SCHEMA CREATION ===")
        initializeSovrin()

        val pool = Pool.openPoolLedger(poolName, "{}").get()

        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        println("=== GET CLAIM SCHEMA ===")
        val claimOfferFilter = "{\"issuer_did\":\"$issuerDid\"}"
        val claimOffersJson = proverGetClaimOffers(proverWallet, claimOfferFilter).get()
        //TODO: convert claimOffers to JSON Array

        closeSovrin(issuerWallet, proverWallet, pool)

        println("=== FINISHED SCHEMA CREATION ===")
        return claimOffersJson
    }

    fun createClaimRequest(claimOffer: String, claimDef: String, masterSecret: String): String {
        println("=== BEGIN CREATE CLAIM REQUEST ===")
        initializeSovrin()

        val pool = Pool.openPoolLedger(poolName, "{}").get()
        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        val claimReq: String
        try {
            println("=== CREATE CLAIM REQUEST ===")
            claimReq = proverCreateAndStoreClaimReq(proverWallet, proverDid, claimOffer, claimDef, masterSecret).get()
            println("=== FINISHED SCHEMA CREATION ===")
        } catch (e: Exception) {
            throw e
        } finally {
            closeSovrin(issuerWallet, proverWallet, pool)
        }

        return claimReq
    }

    fun issuerCreateClaim(claimReq: String, claimAttributes: String): String {
        println("=== BEGIN ISSUER CREATE CLAIM ===")
        initializeSovrin()

        val pool = Pool.openPoolLedger(poolName, "{}").get()
        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        val createClaimResult: AnoncredsResults.IssuerCreateClaimResult
        try {
            println("=== ISSUER CREATE CLAIM ===")
            //TODO: <BUG> can't find issuer wallet by handle
            createClaimResult = issuerCreateClaim(issuerWallet, claimReq, claimAttributes, -1).get()
            println("=== FINISHED ISSUER CREATE CLAIM ===")
        } catch (e: Exception) {
            throw e
        } finally {
            closeSovrin(issuerWallet, proverWallet, pool)
        }

        return createClaimResult.claimJson
    }

    fun proverStoreClaim(claim: String) {
        println("=== BEGIN PROVER STORE CLAIM ===")
        initializeSovrin()

        val pool = Pool.openPoolLedger(poolName, "{}").get()
        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        val createClaimResult: AnoncredsResults.IssuerCreateClaimResult
        try {
            println("=== PROVER STORE CLAIM ===")
            proverStoreClaim(proverWallet, claim).get()
            println("=== FINISHED PROVER STORE CLAIM ===")
        } catch (e: Exception) {
            throw e
        } finally {
            closeSovrin(issuerWallet, proverWallet, pool)
        }
    }

    fun claimsForProofReq(proofRequest: String): String {
        println("=== BEGIN CLAIMS FOR PROOF REQUEST ===")
        initializeSovrin()

        val pool = Pool.openPoolLedger(poolName, "{}").get()
        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        val claimsForProof: String
        try {
            println("=== CLAIMS FOR PROOF REQUEST ===")
            claimsForProof = proverGetClaimsForProofReq(proverWallet, proofRequest).get()
            println("=== FINISHED CLAIMS FOR PROOF REQUEST ===")
        } catch (e: Exception) {
            throw e
        } finally {
            closeSovrin(issuerWallet, proverWallet, pool)
        }

        return claimsForProof
    }

    fun proverCreateProof(proofRequest: String, requestedClaims: String, schemas: String, masterSecret: String, claimDefs: String, revocRegs: String): String {
        println("=== BEGIN PROVER CREATE PROOF ===")
        initializeSovrin()

        val pool = Pool.openPoolLedger(poolName, "{}").get()
        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        val proof: String
        try {
            println("=== PROVER CREATE PROOF ===")
            proof = proverCreateProof(proverWallet, proofRequest, requestedClaims, schemas, masterSecret, claimDefs, revocRegs).get()
            println("=== FINISHED PROVER CREATE PROOF ===")
        } catch (e: Exception) {
            throw e
        } finally {
            closeSovrin(issuerWallet, proverWallet, pool)
        }

        return proof
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