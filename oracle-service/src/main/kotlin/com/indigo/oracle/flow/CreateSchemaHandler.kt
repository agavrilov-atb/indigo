package com.indigo.oracle.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.oracle.service.Oracle
import net.corda.core.flows.FlowException
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.FlowSession

class CreateSchemaHandler(val session: FlowSession) : FlowLogic<Unit?>() {

    @Suspendable
    override fun call(): Unit? {
        try {
            val response = this.serviceHub.cordaService(Oracle::class.java).buildSchema()
            return session?.send(response)
        } catch (e: Exception) {
            throw FlowException(e)
        }
    }

}