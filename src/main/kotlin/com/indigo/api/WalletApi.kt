package com.indigo.api

import com.indigo.api.data.Wallet
import com.indigo.config.NodeConfig
import com.indigo.config.config
import net.corda.core.messaging.CordaRPCOps
import net.corda.core.utilities.loggerFor
import org.apache.cxf.rs.security.cors.CrossOriginResourceSharing
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
    fun setupWallet(): Response{
        var wallet =  Wallet(myNode.config().sovrinConfig.walletName,myNode.config().sovrinConfig.didList.map { it.did }.toList())

        //TODO Call flow/Sovrin API to create wallet

        return Response.ok().entity(wallet).build()
    }



}