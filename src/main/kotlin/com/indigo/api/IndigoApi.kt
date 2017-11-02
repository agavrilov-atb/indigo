package com.indigo.api

import com.indigo.config.IndigoNode
import com.indigo.config.config
import net.corda.core.messaging.CordaRPCOps
import net.corda.core.utilities.loggerFor
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType


@Path("com.indigo")
class IndigoApi(val services: CordaRPCOps) {
    private val myNode = services.nodeInfo()

    private companion object {
        val logger = loggerFor<IndigoApi>()
    }

    /**
     * Returns the node's name.
     */
    @GET
    @Path("me")
    @Produces(MediaType.APPLICATION_JSON)
    fun whoami() = mapOf("me" to myNode.config())

    /**
     * Returns all parties registered with the [NetworkMapService]. These names can be used to look up identities
     * using the [IdentityService].
     */
    @GET
    @Path("AllPeers")
    @Produces(MediaType.APPLICATION_JSON)
    fun getAllPeers(): List<IndigoNode> {
        val nodeInfo = services.networkMapSnapshot()

        return nodeInfo
                .map { it.config() }
                //filter out myself, notary and eventual network map started by driver
                .filter { myNode.config().x500Name != it.x500Name  }
                .toList()

    }


}