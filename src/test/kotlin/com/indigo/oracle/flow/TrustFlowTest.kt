package com.indigo.oracle.flow

import com.indigo.config.config
import com.indigo.flow.SetupTrustFlow
import net.corda.core.identity.Party
import net.corda.core.serialization.CordaSerializable
import net.corda.core.utilities.getOrThrow
import net.corda.node.internal.StartedNode
import net.corda.testing.node.MockNetwork
import net.corda.testing.setCordappPackages
import org.junit.After
import org.junit.Before
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull


class TrustFlowTest {
    lateinit var net: MockNetwork
    lateinit var sellerNode: StartedNode<MockNetwork.MockNode>
    lateinit var buyerNode: StartedNode<MockNetwork.MockNode>
    lateinit var bankNode: StartedNode<MockNetwork.MockNode>
    lateinit var nodes: MockNetwork.BasketOfNodes
    private lateinit var notary: Party
    private lateinit var notaryNode: StartedNode<MockNetwork.MockNode>

    @Before
    fun setup() {
        setCordappPackages("com.indigo")
        net = MockNetwork()
        nodes = net.createSomeNodes(3)
        sellerNode = nodes.partyNodes[0]
        buyerNode = nodes.partyNodes[1]

        notaryNode = nodes.notaryNode
        notary = notaryNode.info.legalIdentities.last()

        buyerNode.registerInitiatedFlow(SetupTrustFlow.AcceptTrustFlow::class.java)
        sellerNode.registerInitiatedFlow(SetupTrustFlow.AcceptTrustFlow::class.java)


        net.runNetwork()



    }

    @After
    fun tearDown() {
        net.stopNodes()
    }

    @Test
    fun `sender acceptor flow`(){

        val senderFlow = SetupTrustFlow.SetupTrustInitiateFlow(buyerNode.info.legalIdentities.first()
                                    ,"adfafadsfasdfasdfasfasdf"
                                    ,buyerNode.info.legalIdentities.first())

        var f =sellerNode.services.startFlow(senderFlow).resultFuture.toCompletableFuture()
        net.runNetwork()
        val result  = f.getOrThrow()
        assertNotNull(result)

    }

}