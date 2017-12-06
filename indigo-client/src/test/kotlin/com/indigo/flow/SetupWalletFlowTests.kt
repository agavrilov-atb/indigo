package com.indigo.flow

import net.corda.core.utilities.getOrThrow
import net.corda.node.internal.StartedNode
import net.corda.testing.node.MockNetwork
import net.corda.testing.setCordappPackages
import net.corda.testing.unsetCordappPackages
import org.junit.After
import org.junit.Before
import org.junit.Test

class SetupWalletFlowTests {
    lateinit var net: MockNetwork
    lateinit var a: StartedNode<MockNetwork.MockNode>
    lateinit var b: StartedNode<MockNetwork.MockNode>

    @Before
    fun setup() {
        setCordappPackages("com.indigo.contract")
        net = MockNetwork()
        val nodes = net.createSomeNodes(2)
        a = nodes.partyNodes[0]
        b = nodes.partyNodes[1]
        // For real nodes this happens automatically, but we have to manually register the flow for tests
        nodes.partyNodes.forEach { it.registerInitiatedFlow(ExampleFlow.Acceptor::class.java) }
        net.runNetwork()
    }

    @After
    fun tearDown() {
        unsetCordappPackages()
        net.stopNodes()
    }

    @Test
    fun `flow creates wallet`() {
        val flow = SetupWalletFlow("foo")
        val future = a.services.startFlow(flow).resultFuture
        net.runNetwork()

        future.getOrThrow()
    }
}
