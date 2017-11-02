package com.indigo.api

import com.indigo.config.IndigoNode
import net.corda.client.rpc.notUsed
import net.corda.core.identity.CordaX500Name
import net.corda.core.messaging.CordaRPCOps
import net.corda.core.utilities.loggerFor
import net.corda.core.utilities.toBase58String
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response


@Path("com.indigo")
class IndigoApi(val services: CordaRPCOps) {
    private val myLegalName = services.nodeInfo().legalIdentities[0].name

    private companion object {
        val logger = loggerFor<IndigoApi>()
    }

    /**
     * Returns the node's name.
     */
    @GET
    @Path("me")
    @Produces(MediaType.APPLICATION_JSON)
    fun whoami() = mapOf("me" to myLegalName)

    /**
     * Returns all parties registered with the [NetworkMapService]. These names can be used to look up identities
     * using the [IdentityService].
     */
    @GET
    @Path("AllPeers")
    @Produces(MediaType.APPLICATION_JSON)
    fun getAllPeers(): List<IndigoNode?> {
        val nodeInfo = services.networkMapSnapshot()
        return nodeInfo
                .map { it.legalIdentities.first().name }
                //filter out myself, notary and eventual network map started by driver
                .filter { it != myLegalName }
                .map { IndigoNode.getIndigoNode(it) }
                .toList()

    }


}