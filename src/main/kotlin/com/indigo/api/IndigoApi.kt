package com.indigo.api

import net.corda.client.rpc.notUsed
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




}