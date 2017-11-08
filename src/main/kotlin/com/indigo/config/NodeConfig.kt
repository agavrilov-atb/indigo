package com.indigo.config

import com.fasterxml.jackson.annotation.JsonFormat
import net.corda.core.identity.CordaX500Name
import net.corda.core.identity.Party
import net.corda.core.node.NodeInfo
import net.corda.core.node.services.NetworkMapCache
import net.corda.core.serialization.CordaSerializable

/**
 * Created by nxshah5 on 11/2/17.
 * This configuration class supports additional Node Configuration.
 */

@CordaSerializable
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
enum class NodeConfig(val x500Name: CordaX500Name,  val sovrinConfig:SovrinConfig) {

    NODE_A(CordaX500Name(organisation = "PartyA", locality = "London" , country = "GB"),
            SovrinConfig("PartyAWallet"
                        , mutableListOf(SovrinDID(seed="r3TestTrustAnchor000000000000000",did="USysKJheVEwjkZTZW2uHo4",verkey = "~RJVdKmy1QiSPCkwNSA7MqL")))
            ),


    NODE_B(CordaX500Name(organisation = "PartyB", locality = "London" , country = "GB")
            , SovrinConfig("PartyBWallet"
                            ,mutableListOf(SovrinDID(seed="r3TestTrustAnchor000000000000001",did="UWNA2p62WWkzP7CdHZDhVa",verkey = "~RrTFkBWT3JorMBdad3ffUR")))
    ),


    NODE_C(CordaX500Name(organisation = "PartyC", locality = "London" , country = "GB")
            , SovrinConfig("PartyCWallet"
                            ,mutableListOf(SovrinDID(seed="r3TestTrustAnchor000000000000002",did="ApBsodxmPeQzPJBYdgdJZt",verkey = "~He6MPC1zX5MwxuGCc3BXTd")))
    );

    companion object {

        fun getParty(nodeConfig: NodeConfig, networkMapCache: NetworkMapCache): Party?
                = networkMapCache.getNodeByLegalName(nodeConfig.x500Name)?.legalIdentities?.firstOrNull()

        fun getIndigoNode(x500Name: CordaX500Name): NodeConfig = NodeConfig.values().filter { it.x500Name.equals(x500Name) }.first()
    }


}


data class SovrinConfig(val walletName: String,var didList: MutableList<SovrinDID>)


data class SovrinDID(val seed:String,var did:String,var verkey:String)

/**
 * User this extension function to find additional node configuration.
 */
public fun NodeInfo.config(): NodeConfig {


    return NodeConfig.getIndigoNode(this.legalIdentities.first().name)

}

