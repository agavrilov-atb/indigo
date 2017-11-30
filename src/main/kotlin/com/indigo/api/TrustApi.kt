package com.indigo.api

import com.indigo.api.data.Message
import com.indigo.api.data.Trust
import com.indigo.api.data.TrustRequest
import com.indigo.flow.SetupTrustFlow.SetupTrustInitiateFlow
import com.indigo.state.SovrinTrustState
import net.corda.core.messaging.CordaRPCOps
import net.corda.core.node.services.Vault
import net.corda.core.node.services.vault.QueryCriteria
import net.corda.core.node.services.vault.Sort
import net.corda.core.utilities.getOrThrow
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
   // private val trustList : MutableList<Trust> = mutableListOf<Trust>()

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

        //trustList.add(Trust(params.myDid,params.otherPartyName,params.otherPartyDid,UUID.randomUUID().toString(),Date.from(Instant.now()).toString()))

        try{
            var otherParty = services.networkMapSnapshot()
                    .filter { it.legalIdentities.first().name.toString().equals(params.otherPartyName)  }
                    .first()
                    .legalIdentities
                    .first()

            val flow = services.startFlowDynamic(SetupTrustInitiateFlow::class.java,myNode.legalIdentities.first(),params.myDid,otherParty,params.otherPartyDid)
            val result = flow.returnValue.getOrThrow()
            var trustState = result.tx.outputs.single().data as SovrinTrustState

            //TODO : After creating new state through flow, immediately performing Vault Query doesn't find the new state
            //It is observed that after waiting for few seconds new state is always found. Need to check WHY?
            Thread.sleep(4000)

            return Response.ok().entity(getSovrinTrusts()).build()
        }catch(e:Exception){
            e.printStackTrace()
            return Response.status(Response.Status.BAD_REQUEST).entity(Message(e.message.toString())).build()
        }

    }


    /**
     * Returns all parties registered with the [NetworkMapService]. These names can be used to look up identities
     * using the [IdentityService].
     */
    @GET
    @Path("getTrusts")
    @Produces(MediaType.APPLICATION_JSON)
    fun getTrusts(): Response{


        return Response.ok().entity(getSovrinTrusts()).build()
    }


    private fun getSovrinTrusts():  MutableList<Trust>{

        val trustList : MutableList<Trust> = mutableListOf<Trust>()

        val criteria = QueryCriteria.VaultQueryCriteria(status = Vault.StateStatus.ALL)
        val states = services.vaultQueryByCriteria<SovrinTrustState>(criteria,SovrinTrustState::class.java)
                .states


               states.filter { it.state.data is SovrinTrustState }
                .forEach{(state)->run{

                    if(myNode.legalIdentities.first().name.toString().equals(state.data.otherParty.name.toString()) ){

                        trustList.add(Trust(state.data.otherPartyDID,state.data.party.name.toString(),state.data.partyDID,state.data.pairwiseDID,state.data.trustCreated.toString()))
                    }else{
                        trustList.add(Trust(state.data.partyDID,state.data.otherParty.name.toString(),state.data.otherPartyDID,state.data.pairwiseDID,state.data.trustCreated.toString()))
                    }

                }}

        return trustList
    }

}