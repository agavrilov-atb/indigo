package net.corda.examples.oracle.service.service

import com.indigo.contract.PrimeContract
import net.corda.core.contracts.Command
import net.corda.core.crypto.TransactionSignature
import net.corda.core.flows.FlowException
import net.corda.core.node.ServiceHub
import net.corda.core.node.services.CordaService
import net.corda.core.serialization.SingletonSerializeAsToken
import net.corda.core.transactions.FilteredTransaction
import org.hyperledger.indy.sdk.IndyException
import org.hyperledger.indy.sdk.LibIndy
import org.hyperledger.indy.sdk.ledger.Ledger
import org.hyperledger.indy.sdk.pool.Pool
import org.hyperledger.indy.sdk.signus.Signus
import org.hyperledger.indy.sdk.signus.SignusJSONParameters
import org.hyperledger.indy.sdk.wallet.Wallet
import java.io.File
import java.math.BigInteger
import org.hyperledger.indy.sdk.pool.PoolJSONParameters.OpenPoolLedgerJSONParameter
import org.hyperledger.indy.sdk.pool.PoolJSONParameters.CreatePoolLedgerConfigJSONParameter

// We sub-class 'SingletonSerializeAsToken' to ensure that instances of this class are never serialised by Kryo.
// When a flow is check-pointed, the annotated @Suspendable methods and any object referenced from within those
// annotated methods are serialised onto the stack. Kryo, the reflection based serialisation framework we use, crawls
// the object graph and serialises anything it encounters, producing a graph of serialised objects.
// This can cause issues. For example, we do not want to serialise large objects on to the stack or objects which may
// reference databases or other external services (which cannot be serialised!). Therefore we mark certain objects with
// tokens. When Kryo encounters one of these tokens, it doesn't serialise the object. Instead, it creates a
// reference to the type of the object. When flows are de-serialised, the token is used to connect up the object
// reference to an instance which should already exist on the stack.
@CordaService
class Oracle(val services: ServiceHub) : SingletonSerializeAsToken() {
    private val myKey = services.myInfo.legalIdentities.first().owningKey

    // Generates a list of natural numbers and filters out the non-primes.
    // The reason why prime numbers were chosen is because they are easy to reason about and reduce the mental load
    // for this tutorial application.
    // Clearly, most developers can generate a list of primes and all but the largest prime numbers can be verified
    // deterministically in reasonable time. As such, it would be possible to add a constraint in the
    // [PrimeContract.verify] function that checks the nth prime is indeed the specified number.
    private val primes = generateSequence(1) { it + 1 }.filter { BigInteger.valueOf(it.toLong()).isProbablePrime(16) }
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

    // Returns the Nth prime for N > 0.
    fun query(n: Int): Int {
        require(n > 1) { "N must be greater than one." }
        return primes.take(n).last()
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
            elem is Command<*> && elem.value is PrimeContract.Create -> {
                val cmdData = elem.value as PrimeContract.Create
                myKey in elem.signers && query(cmdData.n) == cmdData.nthPrime
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
}