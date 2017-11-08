package com.indigo.api

import com.indigo.api.data.SovrinNodeInfo
import com.indigo.api.data.Wallet
import com.indigo.config.NodeConfig
import com.indigo.config.config
import net.corda.core.messaging.CordaRPCOps
import net.corda.core.utilities.loggerFor
import javax.ws.rs.GET
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response
import org.apache.cxf.rs.security.cors.CrossOriginResourceSharing

@CrossOriginResourceSharing(allowAllOrigins = true,
        allowOrigins = arrayOf("http://localhost:4200"),
        allowHeaders = arrayOf("Access-Control-Allow-Origin", "content-type", "accept"),
        exposeHeaders = arrayOf("Access-Control-Allow-Origin", "content-type", "accept"))
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
    fun whoami() = SovrinNodeInfo(myNode.config().x500Name,
                                                    Wallet(myNode.config().sovrinConfig.walletName
                                                            ,myNode.config().sovrinConfig.didList.map { it.did }.toList()))

    /**
     * Returns all parties registered with the [NetworkMapService]. These names can be used to look up identities
     * using the [IdentityService].
     */
    @GET
    @Path("AllPeers")
    @Produces(MediaType.APPLICATION_JSON)
    fun getAllPeers(): List<SovrinNodeInfo> {
        val nodes = services.networkMapSnapshot()

        return nodes
                .filter { !myNode.legalIdentities.first().name.equals(it.legalIdentities.first().name) && !it.legalIdentities.first().name.organisation.equals("Controller")  }
                .map { it.config() }
                .map { SovrinNodeInfo(it.x500Name,
                        Wallet(it.sovrinConfig.walletName
                                ,it.sovrinConfig.didList.map { it.did }.toList())) }

    }



}