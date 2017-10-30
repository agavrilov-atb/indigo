package com.indigo.oracle.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.flow.CreateSchema
import com.indigo.oracle.service.Oracle
import net.corda.core.flows.FlowException
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.FlowSession
import net.corda.core.flows.InitiatedBy

@InitiatedBy(CreateSchema::class)
class CreateSchemaHandler(val session: FlowSession) : FlowLogic<Unit?>() {

    @Suspendable
    override fun call(): Unit? {
        //TODO: allow developer to pass in their own schema
        val schema = "{\"seqNo\":1,\"data\": {\"name\":\"gvt\",\"version\":\"1.0\",\"keys\":[\"age\",\"sex\",\"height\",\"name\"]}}"
        try {
            val response = this.serviceHub.cordaService(Oracle::class.java).createSchema(schema)
            return session.send(response)
        } catch (e: Exception) {
            throw FlowException(e)
        }
    }

}