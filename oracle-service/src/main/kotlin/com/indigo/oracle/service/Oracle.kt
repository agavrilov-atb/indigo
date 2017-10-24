package com.indigo.oracle.service

import com.beust.klaxon.JsonObject
import net.corda.core.flows.FlowException
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

@CordaService
class Oracle(val services: ServiceHub) : SingletonSerializeAsToken() {

    fun generateDID(): String {
        val USER_DID = "W4SGRU86Z58d6TV7PBUe6g"
        val TRUSTEE_DID = "V4SGRU86Z58d6TV7PBUe6f"
        val TRUSTEE_VERKEY = "GJ1SzoWzavQYfNL9XkaJdrQejfztN4XqdsiV4ct3LXKL"
        val TRUSTEE_SEED = "000000000000000000000000Trustee1"
        val poolname = "localhost"

        if (!LibIndy.isInitialized()) {
            LibIndy.init(File("oracle-service/lib/libindy.dylib"))
        }

        try {
            println("=== CREATE TRUSTEE WALLET ===")
            val createWalletResultTrustee = Wallet.createWallet(poolname, "trusteewallet", "default", null, null).get()
            println("Created Trustee Wallet:" + createWalletResultTrustee)
        } catch (e: Exception) {
            if(e.cause!!::class.java.equals(IndyException::class.java)
                    && (e.cause as IndyException).errorCode.toString() == "WalletAlreadyExistsError") {
                println("Trustee wallet already exists, continuing")
            } else {
                throw e
            }
        }

        try {
            println("=== CREATE USER WALLET ===")
            val createWalletResultUser = Wallet.createWallet(poolname, "userwallet", "default", null, null).get()
            println("CreateWalletResultUser: " + createWalletResultUser)
        } catch (e: Exception) {
            if(e.cause!!::class.java.equals(IndyException::class.java)
                    && (e.cause as IndyException).errorCode.toString() == "WalletAlreadyExistsError") {
                println("User wallet already exists, continuing")
            } else {
                throw e
            }
        }

        try {
            println("=== CREATE POOL ===")
            val createPoolLedgerConfigJSONParameter = CreatePoolLedgerConfigJSONParameter("/Users/austinmoothart/dev/project-indigo/oracle-service/lib/localhost.txn")
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

        println("=== OPEN POOL ===")
        val openPoolLedgerJSONParameter = OpenPoolLedgerJSONParameter(java.lang.Boolean.TRUE, null, null)
        println("OpenPoolLedgerJSONParameter: " + openPoolLedgerJSONParameter)
        val pool = Pool.openPoolLedger(poolname, openPoolLedgerJSONParameter.toJson()).get()

        println("=== OPEN TRUSTEE WALLET ===")
        var trusteeWallet = Wallet.openWallet("trusteewallet", null, null).get()


        println("=== CREATE TRUSTEE DID ===")
        val createAndStoreMyDidJSONParameterTrustee = SignusJSONParameters.CreateAndStoreMyDidJSONParameter(null, TRUSTEE_SEED, null, null)
        println("CreateAndStoreMyDidJSONParameterTrustee: " + createAndStoreMyDidJSONParameterTrustee)
        val createAndStoreMyDidResultTrustee = Signus.createAndStoreMyDid(trusteeWallet, createAndStoreMyDidJSONParameterTrustee.toJson()).get()
        val newDid = createAndStoreMyDidResultTrustee.did
        val newVerkey = createAndStoreMyDidResultTrustee.verkey

        println("=== CREATE NYM REQUEST ===")
        val buildNymRequestResult = Ledger.buildNymRequest(TRUSTEE_DID, USER_DID, TRUSTEE_VERKEY, null, null).get()
        println("BuildNymRequestResult: " + buildNymRequestResult)

        println("=== SUBMIT ===")
        val submitRequestResult = Ledger.signAndSubmitRequest(pool, trusteeWallet, TRUSTEE_DID, buildNymRequestResult).get()
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

        println("=== CLOSE WALLET ===")
        trusteeWallet.closeWallet().get()

        println("=== CLOSE POOL ===")
        pool.closePoolLedger().get()
        return savedDid
    }
}