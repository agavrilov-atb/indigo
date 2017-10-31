package com.indigo.state

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

data class SovrinProofState(val pairwiseDID:String, val proofReq:ByteArray, val proofData:ByteArray) : QueryableState {


    override fun generateMappedObject(schema: MappedSchema): PersistentState {
        return when(schema){

            is SovrinProofSchemaV1 -> SovrinProofSchemaV1.PersistentSovrinProofState(
                    this.pairwiseDID,
                    this.proofReq,
                    this.proofData
            )
            else -> throw IllegalArgumentException("Unrecognised schema $schema")
        }

    }

    override fun supportedSchemas(): Iterable<MappedSchema> = listOf(SovrinProofSchemaV1)



    /** The public keys of the involved parties. */
    override val participants: List<AbstractParty> get() = emptyList()
}

object SovrinProofSchema

object SovrinProofSchemaV1 : MappedSchema(
        schemaFamily = SovrinProofSchema.javaClass,
        version = 1,
        mappedTypes = listOf(PersistentSovrinProofState::class.java)) {
    @Entity
    @Table(name = "sovrin_proof_state")
    class PersistentSovrinProofState(

            @Column(name = "pairwise_did")
            var pairwiseDID: String,

            @Column(name = "proof_req")
            var ProofDefId: ByteArray,

            @Column(name = "proof_data")
            var ProofData: ByteArray




    ) : PersistentState()
}