package com.indigo.config

import com.fasterxml.jackson.annotation.JsonFormat
import net.corda.core.identity.CordaX500Name
import net.corda.core.identity.Party
import net.corda.core.node.services.NetworkMapCache
import net.corda.core.serialization.CordaSerializable

/**
 * Created by nxshah5 on 11/2/17.
 */

@CordaSerializable
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
enum class IndigoNode(val x500Name: CordaX500Name,val sovrinDID:String) {

    NODE_A(CordaX500Name(organisation = "PartyA", locality = "London" , country = "GB"),"DID_NODE_A"),
    NODE_B(CordaX500Name(organisation = "Oracle", locality = "New York" , country = "US"),"DID_NODE_B"),
    NODE_C(CordaX500Name(organisation = "Controller", locality = "London" , country = "GB"),"DID_NODE_C");

    companion object {

        fun getParty(node: IndigoNode, networkMapCache: NetworkMapCache): Party?
                = networkMapCache.getNodeByLegalName(node.x500Name)?.legalIdentities?.firstOrNull()

        fun getIndigoNode(x500Name: CordaX500Name): IndigoNode? = IndigoNode.values().filter { it.x500Name.equals(x500Name) }.firstOrNull()
    }

}

