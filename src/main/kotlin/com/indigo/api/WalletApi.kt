package com.indigo.api

import com.beust.klaxon.JsonObject
import com.indigo.flow.SetupWalletFlow
import net.corda.core.messaging.CordaRPCOps
import net.corda.core.messaging.startTrackedFlow
import net.corda.core.utilities.getOrThrow
import net.corda.core.utilities.loggerFor
import org.apache.cxf.rs.security.cors.CrossOriginResourceSharing
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.QueryParam
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@CrossOriginResourceSharing(allowAllOrigins = true,
        allowOrigins = arrayOf("http://localhost:4200"),
        allowHeaders = arrayOf("origin", "content-type", "accept"),
        exposeHeaders = arrayOf("origin", "content-type", "accept"))
@Path("com.indigo")
class WalletApi(val services: CordaRPCOps) {
    private val myNode = services.nodeInfo()

    private companion object {
        val logger = loggerFor<WalletApi>()
    }

    /**
     * Returns all parties registered with the [NetworkMapService]. These names can be used to look up identities
     * using the [IdentityService].
     */
    @POST
    @Path("setupWallet")
    @Produces(MediaType.APPLICATION_JSON)
    fun setupWallet(@QueryParam("name") name: String): Response {
        if ( name.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Query parameter 'name' must be specified.\n").build()
        }

        var status: Response.Status
        var msg: String
        try {
            val flowHandle = services.startTrackedFlow(::SetupWalletFlow, name)

            // The line below blocks and waits for the future to resolve.
            flowHandle.returnValue.getOrThrow()

            status = Response.Status.CREATED
            msg = JsonObject(mutableMapOf("result" to "Sovrin wallet $name committed to ledger")).toJsonString()
        } catch (ex: Throwable) {
            status = Response.Status.BAD_REQUEST
            msg = JsonObject(mutableMapOf("result" to ex.message!!)).toJsonString()
            logger.error(msg, ex)
        }

        return Response.status(status).entity(msg).build()
    }



}