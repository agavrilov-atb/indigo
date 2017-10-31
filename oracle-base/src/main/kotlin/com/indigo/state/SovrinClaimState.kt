package com.indigo.state

import net.corda.core.contracts.LinearState
import net.corda.core.contracts.UniqueIdentifier
import net.corda.core.identity.AbstractParty
import net.corda.core.schemas.MappedSchema
import net.corda.core.schemas.PersistentState
import net.corda.core.schemas.QueryableState
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Table

/**
 * Created by nxshah5 on 10/31/17.
 */

data class SovrinClaimState(val pairwiseDID:String, val claimDefId:String, val data:ByteArray) : QueryableState {


    override fun generateMappedObject(schema: MappedSchema): PersistentState {
        return when(schema){

            is SovrinClaimSchemaV1 -> SovrinClaimSchemaV1.PersistentSovrinClaimState(
                    this.pairwiseDID,
                    this.claimDefId,
                    this.data
            )
            else -> throw IllegalArgumentException("Unrecognised schema $schema")
        }

    }

    override fun supportedSchemas(): Iterable<MappedSchema> = listOf(SovrinClaimSchemaV1)



    /** The public keys of the involved parties. */
    override val participants: List<AbstractParty> get() = emptyList()
}

object SovrinClaimSchema

object SovrinClaimSchemaV1 : MappedSchema(
        schemaFamily = SovrinClaimSchema.javaClass,
        version = 1,
        mappedTypes = listOf(PersistentSovrinClaimState::class.java)) {
    @Entity
    @Table(name = "sovrin_claim_state")
    class PersistentSovrinClaimState(

            @Column(name = "pairwise_did")
            var pairwiseDID: String,

            @Column(name = "claim_def_id")
            var claimDefId: String,

            @Column(name = "claim_data")
            var claimData: ByteArray




    ) : PersistentState()
}