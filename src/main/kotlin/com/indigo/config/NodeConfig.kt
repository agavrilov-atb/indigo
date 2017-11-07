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
enum class IndigoNode(val x500Name: CordaX500Name,val sovrinDID:String, sovrinWalletName :String?=null) {

    NODE_A(x500Name = CordaX500Name(organisation = "PartyA", locality = "London" , country = "GB"),sovrinDID = "DID_NODE_A"),
    NODE_B(CordaX500Name(organisation = "Oracle", locality = "New York" , country = "US"),"DID_NODE_B"),
    NODE_C(CordaX500Name(organisation = "Controller", locality = "London" , country = "GB"),"DID_NODE_C");

    companion object {

        fun getParty(node: IndigoNode, networkMapCache: NetworkMapCache): Party?
                = networkMapCache.getNodeByLegalName(node.x500Name)?.legalIdentities?.firstOrNull()

        fun getIndigoNode(x500Name: CordaX500Name): IndigoNode = IndigoNode.values().filter { it.x500Name.equals(x500Name) }.first()
    }

    var sovrinWalletName:String = this.x500Name.organisation
            set(value){
                if(sovrinWalletName != null){
                    field = sovrinWalletName
                }else{
                    field = value
                }

            }
            get(){
                if(field == null){
                    return this.x500Name.organisation
                }else{
                    return field
                }
            }

}

/**
 * User this extension function to find additional node configuration.
 */
public fun NodeInfo.config(): IndigoNode {
    return IndigoNode.getIndigoNode(this.legalIdentities.first().name)
}

