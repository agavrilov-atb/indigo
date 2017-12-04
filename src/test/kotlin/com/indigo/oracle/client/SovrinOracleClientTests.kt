package net.corda.examples.oracle.client

import com.indigo.contract.DIDState
import com.indigo.flow.SovrinFlow
import com.indigo.oracle.flow.*
import net.corda.core.identity.CordaX500Name
import net.corda.core.utilities.getOrThrow
import net.corda.node.internal.StartedNode
import net.corda.testing.node.MockNetwork
import net.corda.testing.setCordappPackages
import net.corda.testing.unsetCordappPackages
import org.junit.After
import org.junit.Before
import org.junit.Test
import kotlin.test.assertNotNull

class SovrinOracleClientTests {
    private val mockNet = MockNetwork()
    private lateinit var a: StartedNode<MockNetwork.MockNode>

    @Before
    fun setUp() {
        setCordappPackages("com.indigo.oracle.service", "com.indigo.contract")

        val nodes = mockNet.createSomeNodes(1)
        a = nodes.partyNodes.first()

        val oracle = mockNet.createNode(nodes.mapNode.network.myAddress, legalName = CordaX500Name("Oracle", "New York", "US"))
        listOf(GenerateDIDHandler::class.java,
                CreateClaimDefHandler::class.java,
                EstablishMasterSecretHandler::class.java,
                StoreClaimOfferHandler::class.java,
                GetClaimOffersHandler::class.java,
                CreateClaimReqHandler::class.java,
                CreateClaimHandler::class.java,
                StoreClaimHandler::class.java,
                ClaimsForProofRequestHandler::class.java,
                CreateProofHandler::class.java,
                SignSovrinHandler::class.java).forEach { oracle.registerInitiatedFlow(it) }
        oracle.internals.installCordaService(com.indigo.oracle.service.Oracle::class.java)

        mockNet.runNetwork()
    }

    @After
    fun tearDown() {
        mockNet.stopNodes()
        unsetCordappPackages()
    }

    @Test
    fun `complete anon creds demo flow from client`() {
        val flow = a.services.startFlow(SovrinFlow())
        mockNet.runNetwork()
        val result = flow.resultFuture.getOrThrow().tx.outputsOfType<DIDState>().single()
        //TODO: test more than the simple completion of the demo flow
        assertNotNull(result)
    }

}