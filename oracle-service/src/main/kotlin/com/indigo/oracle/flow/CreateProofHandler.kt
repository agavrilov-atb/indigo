package com.indigo.oracle.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.flow.CreateProof
import com.indigo.oracle.service.Oracle
import net.corda.core.flows.FlowException
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.FlowSession
import net.corda.core.flows.InitiatedBy
import net.corda.core.utilities.unwrap

@InitiatedBy(CreateProof::class)
class CreateProofHandler(val session: FlowSession) : FlowLogic<Unit?>() {

    @Suspendable
    override fun call(): Unit? {
        //TODO
        val schema= session.receive<String>().unwrap { it }
        try {
            val response = this.serviceHub.cordaService(Oracle::class.java).createClaimDef(schema)
            return session.send(response)
        } catch (e: Exception) {
            throw FlowException(e)
        }
    }

}