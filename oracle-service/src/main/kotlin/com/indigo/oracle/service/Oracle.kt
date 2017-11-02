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
import com.indigo.contract.DIDContract
import net.corda.core.contracts.Command
import net.corda.core.crypto.TransactionSignature
import net.corda.core.transactions.FilteredTransaction
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverCreateProof
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverGetClaimsForProofReq
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverStoreClaim
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.issuerCreateClaim
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverCreateAndStoreClaimReq
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverGetClaimOffers
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverStoreClaimOffer
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.proverCreateMasterSecret
import org.hyperledger.indy.sdk.anoncreds.Anoncreds.issuerCreateAndStoreClaimDef
import org.hyperledger.indy.sdk.anoncreds.AnoncredsResults

@CordaService
class Oracle(val services: ServiceHub) : SingletonSerializeAsToken() {
    private var poolname = ""
    private var txn = ""
    init {
        val local = false
        if(local) {
            poolname = "localhost"
            txn = "/Users/austinmoothart/dev/project-indigo/oracle-service/lib/localhost.txn"
        } else {
            poolname = "stn"
            txn = "/Users/nxshah5/IdeaProjects/project-indigo/oracle-service/lib/stn.txn"
        }
    }

    private val myKey = services.myInfo.legalIdentities.first().owningKey
    val parser = Parser()

    /**
     *  TODO: This attributes should come from client.
     *  - Client should make the createWallet call and should maintain its wallet
     *  - Once the wallet is created it should provide DID,Verkey & Seed
     *
     */
    private val issuerWalletName = "issuerWallet"
    private val proverWalletName = "proverWallet"

    private val issuerDid = "W4SGRU86Z58d6TV7PBUe6g"
    private val proverDid = "USysKJheVEwjkZTZW2uHo4"
    private val proverVerkey = "~RJVdKmy1QiSPCkwNSA7MqL"
    private val proverSeed = "r3TestTrustAnchor00000000000000"


    fun generateDID(): String {
        println("=== BEGIN DID GENERATION ===")
        initializeSovrin()

        println("=== OPEN POOL ===")
        val openPoolLedgerJSONParameter = OpenPoolLedgerJSONParameter(java.lang.Boolean.TRUE, null, null)
        println("OpenPoolLedgerJSONParameter: " + openPoolLedgerJSONParameter)
        val pool = openPoolLedger(openPoolLedgerJSONParameter.toJson())

        println("=== OPEN PROVER WALLET ===")
        var proverWallet = Wallet.openWallet(proverWalletName, null, null).get()
        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()

        var savedDid = ""
        try {
            println("=== CREATE PROVER DID ===")
            val createAndStoreMyDidJSONParameterTrustee = SignusJSONParameters.CreateAndStoreMyDidJSONParameter(null, proverSeed, null, null)
            println("CreateAndStoreMyDidJSONParameterTrustee: " + createAndStoreMyDidJSONParameterTrustee)
            val createAndStoreMyDidResultTrustee = Signus.createAndStoreMyDid(proverWallet, createAndStoreMyDidJSONParameterTrustee.toJson()).get()
            val newDid = createAndStoreMyDidResultTrustee.did
            val newVerkey = createAndStoreMyDidResultTrustee.verkey

            println("=== CREATE NYM REQUEST ===")
            val buildNymRequestResult = Ledger.buildNymRequest(proverDid, newDid, newVerkey, null, null).get()
            println("BuildNymRequestResult: " + buildNymRequestResult)

            println("=== SUBMIT ===")
            val submitRequestResult = Ledger.signAndSubmitRequest(pool, proverWallet, proverDid, buildNymRequestResult).get()
            println("SubmitRequestResult: " + submitRequestResult)
            val json: JsonObject = parser.parse(StringBuilder(submitRequestResult)) as JsonObject
            println("SubmitRequestResult: " + json)
            savedDid = json.obj("result")?.string("dest") ?: ""
            val savedVerkey = json.obj("result")?.string("verkey") ?: ""

            if (newDid != savedDid) {
                //throw exception?
            }

            if (newVerkey != savedVerkey) {
                //throw exception?
            }
        } catch (e: Exception) {
            throw e
        } finally {
            closeSovrin(issuerWallet, proverWallet, pool)
        }

        println("=== FINISHED DID GENERATION ===")
        return savedDid
    }

    fun createClaimDef(schema: String): String {
        println("=== BEGIN SCHEMA CREATION ===")
        initializeSovrin()

        val pool = openPoolLedger("{}")

        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        var claimDef = ""
        println("=== CREATE AND STORE SCHEMA ===")
        try {
            claimDef = issuerCreateAndStoreClaimDef(issuerWallet, issuerDid, schema, null, false).get()
        } catch (e: Exception) {
            if(e.cause!!::class.java.equals(IndyException::class.java)
                    && (e.cause as IndyException).errorCode.toString() == "AnoncredsMasterSecretDuplicateNameError") {
                println("MasterSecret already exists, continuing")
            } else {
                throw e
            }
        } finally {
            closeSovrin(issuerWallet, proverWallet, pool)
        }

        println("=== FINISHED SCHEMA CREATION ===")
        return claimDef
    }

    /**
     * Master secret to encrypt the proof request (like Salt in cryptography)
     * - Belongs to Prover
     * - Unique per proof
     * - Randomly generated (UUID)
     *
     */
    fun establishMasterSecret(masterSecret: String) {
        println("=== BEGIN SCHEMA CREATION ===")
        initializeSovrin()

        val pool = openPoolLedger("{}")

        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        println("=== ESTABLISH MASTER SECRET ===")
        try {
            proverCreateMasterSecret(proverWallet, masterSecret).get()
        } catch (e: Exception) {
            if(e.cause!!::class.java.equals(IndyException::class.java)
                    && (e.cause as IndyException).errorCode.toString() == "AnoncredsMasterSecretDuplicateNameError") {
                println("MasterSecret already exists, continuing")
            } else {
                throw e
            }
        } finally {
            closeSovrin(issuerWallet, proverWallet, pool)
        }
    }

    fun storeClaimOffer(claimOffer: String) {
        println("=== BEGIN STORE CLAIM OFFER ===")
        initializeSovrin()

        val pool = openPoolLedger("{}")

        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        println("=== STORE CLAIM OFFER ===")
        try {
            proverStoreClaimOffer(proverWallet, claimOffer).get()
        } catch (e: Exception) {
            if(e.cause!!::class.java.equals(IndyException::class.java)
                    && (e.cause as IndyException).errorCode.toString() == "AnoncredsMasterSecretDuplicateNameError") {
                println("MasterSecret already exists, continuing")
            } else {
                throw e
            }
        } finally {
            closeSovrin(issuerWallet, proverWallet, pool)
        }
    }

    fun getClaimOffers(claimOfferFilter: String): String {
        println("=== BEGIN SCHEMA CREATION ===")
        initializeSovrin()

        val pool = openPoolLedger("{}")

        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        println("=== GET CLAIM SCHEMA ===")
        val claimOffersJson = proverGetClaimOffers(proverWallet, claimOfferFilter).get()
        //TODO: convert claimOffers to JSON Array

        closeSovrin(issuerWallet, proverWallet, pool)

        println("=== FINISHED SCHEMA CREATION ===")
        return claimOffersJson
    }

    fun createClaimRequest(claimOffer: String, claimDef: String, masterSecret: String): String {
        println("=== BEGIN CREATE CLAIM REQUEST ===")
        initializeSovrin()

        val pool = openPoolLedger("{}")
        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        val claimReq: String
        println("=== CREATE CLAIM REQUEST ===")
        try {
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

        val pool = openPoolLedger("{}")
        val issuerWallet = Wallet.openWallet(issuerWalletName, null, null).get()
        val proverWallet = Wallet.openWallet(proverWalletName, null, null).get()

        val createClaimResult: AnoncredsResults.IssuerCreateClaimResult
        try {
            println("=== ISSUER CREATE CLAIM ===")
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

        val pool = openPoolLedger("{}")
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

    fun claimsForProofReq(proofRequest: String): JsonObject {
        println("=== BEGIN CLAIMS FOR PROOF REQUEST ===")
        initializeSovrin()

        val pool = openPoolLedger("{}")
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

        return parser.parse(StringBuilder(claimsForProof)) as JsonObject
    }

    fun proverCreateProof(proofRequest: String, requestedClaims: String, schemas: String, masterSecret: String, claimDefs: String, revocRegs: String): JsonObject {
        println("=== BEGIN PROVER CREATE PROOF ===")
        initializeSovrin()

        val pool = openPoolLedger("{}")
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

        return parser.parse(StringBuilder(proof)) as JsonObject
    }

    // Signs over a transaction if the specified Nth prime for a particular N is correct.
    // This function takes a filtered transaction which is a partial Merkle tree. Any parts of the transaction which
    // the oracle doesn't need to see in order to verify the correctness of the nth prime have been removed. In this
    // case, all but the [PrimeContract.Create] commands have been removed. If the Nth prime is correct then the oracle
    // signs over the Merkle root (the hash) of the transaction.
    fun sign(ftx: FilteredTransaction): TransactionSignature {
        // Check the partial Merkle tree is valid.
        ftx.verify()

        /** Returns true if the component is an Create command that:
         *  - States the correct prime
         *  - Has the oracle listed as a signer
         */
        fun isCommandWithCorrectPrimeAndIAmSigner(elem: Any) = when {
            elem is Command<*> && elem.value is DIDContract.Commands.GenerateDID -> {
//                val cmdData = elem.value as DIDContract.Create
//                myKey in elem.signers && query(cmdData.n) == cmdData.nthPrime
                true //TODO: how to verify and sign?
            }
            else -> false
        }

        // Is it a Merkle tree we are willing to sign over?
        val isValidMerkleTree = ftx.checkWithFun(::isCommandWithCorrectPrimeAndIAmSigner)

        if (isValidMerkleTree) {
            return services.createSignature(ftx, myKey)
        } else {
            throw IllegalArgumentException("Oracle signature requested over invalid transaction.")
        }
    }

    private fun initializeSovrin() {
        println("=== INITIALIZE indy-sdk ===")
        if (!LibIndy.isInitialized()) {
            LibIndy.init(File("oracle-service/lib/libindy.dylib"))
        }

        println("=== INITIALIZE SOVRIN CONFIG ===")
        createPoolConfig(txn)
        createWallet(issuerWalletName)
        createWallet(proverWalletName)
    }

    private fun closeSovrin(issuerWallet: Wallet, proverWallet: Wallet, pool: Pool) {
        println("=== CLOSE SOVRIN CONNECTION ===")
        issuerWallet.closeWallet().get()
        proverWallet.closeWallet().get()
        pool.closePoolLedger().get()
    }

    private fun createWallet(name: String) {
        try {
            println("=== CREATE $name WALLET ===")
            val createdWallet = Wallet.createWallet(poolname, name, "default", null, null).get()
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

    private fun createPoolConfig(txn: String) {
        try {
            println("=== CREATE POOL ===")
            val createPoolLedgerConfigJSONParameter = CreatePoolLedgerConfigJSONParameter(txn)
            println("CreatePoolLedgerConfigJSONParameter: " + createPoolLedgerConfigJSONParameter)
            Pool.createPoolLedgerConfig(poolname, createPoolLedgerConfigJSONParameter.toJson()).get()
        } catch (e: Exception) {
            if(e.cause!!::class.java.equals(IndyException::class.java)
                    && (e.cause as IndyException).errorCode.toString() == "PoolLedgerConfigAlreadyExistsError") {
                println("Ledger config already exists, continuing")
            } else {
                throw e
            }
        }
    }

    private fun openPoolLedger(config: String) : Pool {
        return Pool.openPoolLedger(poolname, config).get()
    }
}