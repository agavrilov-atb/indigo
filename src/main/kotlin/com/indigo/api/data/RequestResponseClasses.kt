package com.indigo.api.data

import net.corda.core.identity.CordaX500Name

/**
 * Created by nxshah5 on 11/7/17.
 */
data class Wallet(val name:String, val storedDIDs:List<String>)

data class SovrinNodeInfo(val x500Name:CordaX500Name,val wallet:Wallet)

data class TrustRequest(val myDid:String,val otherPartyName:String,val otherPartyDid:String)

data class Trust(val myDID:String,val otherPartyName:String,val otherPartyDID:String,val pairwiseDID:String,val date:String)