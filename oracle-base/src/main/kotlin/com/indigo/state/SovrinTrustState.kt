package com.indigo.state

import net.corda.core.identity.AbstractParty
import net.corda.core.identity.Party
import net.corda.core.schemas.MappedSchema
import net.corda.core.schemas.PersistentState
import net.corda.core.schemas.QueryableState
import java.sql.Timestamp
import java.time.Instant
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Table


/**
 * Created by nxshah5 on 10/31/17.
 */
data class SovrinTrustState(val party: Party, val partyDID:String, val otherParty:Party, val otherPartyDID:String, val pairwiseDID:String,val trustCreated:Instant)
    : QueryableState{


    override fun generateMappedObject(schema: MappedSchema): PersistentState {
        return when(schema){

                is SovrinTrustSchemaV1 -> SovrinTrustSchemaV1.PersistentSovrinTrustState(
                                                                party.name.toString()
                                                                ,partyDID
                                                                ,otherParty.name.toString()
                                                                ,otherPartyDID
                                                                ,pairwiseDID
                                                                ,trustCreated
                                                            )
                else -> throw IllegalArgumentException("Unrecognised schema $schema")
            }

    }

    override fun supportedSchemas(): Iterable<MappedSchema> = listOf(SovrinTrustSchemaV1)



    /** The public keys of the involved parties. */
    override val participants: List<AbstractParty> get() = listOf(party,otherParty)
}

object SovrinTrustSchema

object SovrinTrustSchemaV1 : MappedSchema(
        schemaFamily = SovrinTrustSchema.javaClass,
        version = 1,
        mappedTypes = listOf(PersistentSovrinTrustState::class.java)) {
    @Entity
    @Table(name = "sovrin_trust_state")
    class PersistentSovrinTrustState(

            @Column(name = "name")
            var name: String,

            @Column(name = "did")
            var did: String,

            @Column(name = "other_party_name")
            var otherPartyName: String,

            @Column(name = "other_party_did")
            var otherPartyDID: String,

            @Column(name = "pairwise_did")
            var pairwiseDID: String,

            @Column(name= "trust_created")
            var trustCreated : Instant


    ) : PersistentState()
}