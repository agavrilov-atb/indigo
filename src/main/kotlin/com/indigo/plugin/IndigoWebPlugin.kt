package com.indigo.plugin

import com.indigo.api.IndigoApi
import com.indigo.api.TrustApi
import com.indigo.api.WalletApi
import net.corda.core.messaging.CordaRPCOps
import net.corda.webserver.services.WebServerPluginRegistry
import java.util.function.Function

class IndigoWebPlugin : WebServerPluginRegistry {
    /**
     * A list of classes that expose web APIs.
     */
    override val webApis: List<Function<CordaRPCOps, out Any>> =
            listOf( Function(::IndigoApi),Function(::WalletApi), Function(::TrustApi)

            )

    /**
     * A list of directories in the resources directory that will be served by Jetty under /web.
     * The template's web frontend is accessible at /web/template.
     */
    override val staticServeDirs: Map<String, String> = mapOf(
            // This will serve the janusWeb directory in resources to /web/indigo
            "indigo" to javaClass.classLoader.getResource("indigoWeb").toExternalForm()
    )

}