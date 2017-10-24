package com.indigo.oracle.service

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

@CordaService
class Oracle(val services: ServiceHub) : SingletonSerializeAsToken() {
    val USER_DID = "W4SGRU86Z58d6TV7PBUe6g"
    val TRUSTEE_DID = "V4SGRU86Z58d6TV7PBUe6f"
    val TRUSTEE_VERKEY = "GJ1SzoWzavQYfNL9XkaJdrQejfztN4XqdsiV4ct3LXKL"
    val TRUSTEE_SEED = "000000000000000000000000Trustee1"

    fun generateDID(): String {
        if (!LibIndy.isInitialized()) {
            LibIndy.init(File("oracle-service/lib/libindy.dylib"))
        }

        try {
            println("=== CREATE TRUSTEE WALLET ===")
            val createWalletResultTrustee = Wallet.createWallet("localhost", "trusteewallet", "default", null, null).get()
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
            val createWalletResultUser = Wallet.createWallet("localhost", "userwallet", "default", null, null).get()
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
            Pool.createPoolLedgerConfig("localhost", createPoolLedgerConfigJSONParameter.toJson()).get()
        } catch (e: Exception) {
            if(e.cause!!::class.java.equals(IndyException::class.java)
                    && (e.cause as IndyException).errorCode.toString() == "PoolLedgerConfigAlreadyExistsError") {
                println("Ledger config already exists, continuing")
            } else {
                throw e
            }
        }

        try {
            println("=== OPEN POOL ===")
            val openPoolLedgerJSONParameter = OpenPoolLedgerJSONParameter(java.lang.Boolean.TRUE, null, null)
            println("OpenPoolLedgerJSONParameter: " + openPoolLedgerJSONParameter)
            val pool = Pool.openPoolLedger("localhost", openPoolLedgerJSONParameter.toJson()).get()

            println("=== OPEN TRUSTEE WALLET ===")
            var trusteeWallet = Wallet.openWallet("trusteewallet", null, null).get()


            println("=== CREATE TRUSTEE DID ===")
            val createAndStoreMyDidJSONParameterTrustee = SignusJSONParameters.CreateAndStoreMyDidJSONParameter(null, TRUSTEE_SEED, null, null)
            println("CreateAndStoreMyDidJSONParameterTrustee: " + createAndStoreMyDidJSONParameterTrustee)
            val createAndStoreMyDidResultTrustee = Signus.createAndStoreMyDid(trusteeWallet, createAndStoreMyDidJSONParameterTrustee.toJson()).get()

            println("=== CREATE NYM REQUEST ===")
            val buildNymRequestResult = Ledger.buildNymRequest(TRUSTEE_DID, USER_DID, TRUSTEE_VERKEY, null, null).get()
            println("BuildNymRequestResult: " + buildNymRequestResult)

            // submit request to ledger
            println("=== SUBMIT ===")
            val submitRequestResult = Ledger.signAndSubmitRequest(pool, trusteeWallet, TRUSTEE_DID, buildNymRequestResult).get()
            println("SubmitRequestResult: " + submitRequestResult)

            // close wallet
            println("=== CLOSE WALLET ===")
            trusteeWallet.closeWallet().get()

            // close pool
            println("=== CLOSE POOL ===")
            pool.closePoolLedger().get()
            return submitRequestResult
        } catch (e: Exception) {
            e.printStackTrace()
            throw FlowException("Could not open Sovrin wallet: ", e)
        }

    }
}