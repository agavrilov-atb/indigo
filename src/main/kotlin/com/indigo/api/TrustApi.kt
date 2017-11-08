package com.indigo.api

import com.indigo.api.data.Trust
import com.indigo.api.data.TrustRequest
import com.indigo.api.data.Wallet
import com.indigo.config.NodeConfig
import com.indigo.config.config
import net.corda.core.messaging.CordaRPCOps
import net.corda.core.utilities.loggerFor
import org.apache.cxf.rs.security.cors.CrossOriginResourceSharing
import java.time.Instant
import java.util.*
import javax.ws.rs.GET
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@CrossOriginResourceSharing(allowAllOrigins = true,
        allowOrigins = arrayOf("http://localhost:4200"),
        allowHeaders = arrayOf("origin", "content-type", "accept"),
        exposeHeaders = arrayOf("origin", "content-type", "accept"))
@Path("com.indigo")
class TrustApi(val services: CordaRPCOps) {


    private val myNode = services.nodeInfo()

    /**
     * TODO TEMPORARY STATIC LIST. REMOVE ONCE FLOW IS USED
     */
    private val trustList : MutableList<Trust> = mutableListOf<Trust>()

    private companion object {
        val logger = loggerFor<WalletApi>()
    }



    /**
     * Returns all parties registered with the [NetworkMapService]. These names can be used to look up identities
     * using the [IdentityService].
     */
    @POST
    @Path("setupTrust")
    @Produces(MediaType.APPLICATION_JSON)
    fun setupWallet(params: TrustRequest): Response{

        trustList.add(Trust(params.myDid,params.otherPartyName,params.otherPartyDid,UUID.randomUUID().toString(),Date.from(Instant.now()).toString()))

        return Response.ok().entity(trustList).build()
    }

    /**
     * Returns all parties registered with the [NetworkMapService]. These names can be used to look up identities
     * using the [IdentityService].
     */
    @GET
    @Path("getTrusts")
    @Produces(MediaType.APPLICATION_JSON)
    fun getTrusts(): Response{


        return Response.ok().entity(trustList).build()
    }



}