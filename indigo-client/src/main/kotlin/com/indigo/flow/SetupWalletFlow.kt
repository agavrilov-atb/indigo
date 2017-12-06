package com.indigo.flow

import co.paralleluniverse.fibers.Suspendable
import net.corda.core.flows.FinalityFlow
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.InitiatingFlow
import net.corda.core.flows.StartableByRPC
import net.corda.core.utilities.ProgressTracker
import org.hyperledger.indy.sdk.IndyException
import org.hyperledger.indy.sdk.LibIndy
import org.hyperledger.indy.sdk.pool.Pool
import org.hyperledger.indy.sdk.pool.PoolJSONParameters
import org.hyperledger.indy.sdk.wallet.Wallet
import java.io.File


@InitiatingFlow
@StartableByRPC
class SetupWalletFlow(val name: String) : FlowLogic<Unit>() {
    companion object {
        object SET_UP : ProgressTracker.Step("Initialising flow.")
        object SETTING_UP_WALLET : ProgressTracker.Step("Setting up a new wallet with Sovrin.")
        object FINALISING : ProgressTracker.Step("Finalising transaction.") {
            override fun childProgressTracker() = FinalityFlow.tracker()
        }

        fun tracker() = ProgressTracker(SET_UP,
                SETTING_UP_WALLET,
                FINALISING)
    }

    override val progressTracker = tracker()

    private var poolname = ""
    private var txn = ""
    init {
        val local = false
        if(local) {
            poolname = "localhost"
            txn = "/Users/austinmoothart/dev/project-indigo/indigo-client/src/resources/lib/localhost.txn"
        } else {
            poolname = "stn"
            txn = "/Users/austinmoothart/dev/project-indigo/indigo-client/src/resources/lib/stn.txn"
        }
    }


    @Suspendable
    override fun call(): Unit {
        println("=== INITIALIZE indy-sdk ===")
        if (!LibIndy.isInitialized()) {
//            val input = javaClass.getResourceAsStream("/lib/libindy.dylib")
//            val reader = BufferedReader(InputStreamReader(input))

            LibIndy.init(File("/lib/libindy.dylib"))
        }

        try {
            println("=== CREATE POOL ===")
            val createPoolLedgerConfigJSONParameter = PoolJSONParameters.CreatePoolLedgerConfigJSONParameter(txn)
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

        try {
            println("=== CREATE $name WALLET ===")
            Wallet.createWallet(poolname, name, "default", null, null).get()
            println("Created Wallet with name: $name")
        } catch (e: Exception) {
            if(e.cause!!::class.java.equals(IndyException::class.java)
                    && (e.cause as IndyException).errorCode.toString() == "WalletAlreadyExistsError") {
                println("$name already exists, continuing")
            } else {
                throw e
            }
        }
    }
}