package com.indigo.state

import net.corda.core.contracts.LinearState
import net.corda.core.contracts.UniqueIdentifier
import net.corda.core.identity.AbstractParty
import net.corda.core.identity.Party
import net.corda.core.schemas.MappedSchema
import net.corda.core.schemas.PersistentState
import net.corda.core.schemas.QueryableState
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Table

/**
 * Created by nxshah5 on 10/31/17.
 */

data class SovrinClaimDefState(val party: Party, val partyDID:String, val claimDefId:String, val claimDef:ByteArray) : LinearState,QueryableState {

    override val linearId: UniqueIdentifier = UniqueIdentifier()

    override fun generateMappedObject(schema: MappedSchema): PersistentState {
        return when(schema){

            is SovrinClaimDefSchemaV1 -> SovrinClaimDefSchemaV1.PersistentSovrinClaimDefState(
                    this.party.name.toString(),
                    this.partyDID,
                    this.claimDefId,
                    this.claimDef

            )
            else -> throw IllegalArgumentException("Unrecognised schema $schema")
        }

    }

    override fun supportedSchemas(): Iterable<MappedSchema> = listOf(SovrinClaimDefSchemaV1)



    /** The public keys of the involved parties. */
    override val participants: List<AbstractParty> get() = emptyList()
}

object SovrinClaimDefSchema
object SovrinClaimDefSchemaV1 : MappedSchema(
        schemaFamily = SovrinClaimDefSchema.javaClass,
        version = 1,
        mappedTypes = listOf(PersistentSovrinClaimDefState::class.java)) {
    @Entity
    @Table(name = "sovrin_claim_def_state")
    class PersistentSovrinClaimDefState(

            @Column(name = "name")
            var name: String,

            @Column(name = "party_did")
            var partyDID: String,

            @Column(name = "claim_def_id")
            var claimDefId: String,

            @Column(name="claim_def")
            var claimDef: ByteArray




    ) : PersistentState()
}