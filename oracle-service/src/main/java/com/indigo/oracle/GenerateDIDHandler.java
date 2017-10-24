package com.indigo.oracle;

import co.paralleluniverse.fibers.Suspendable;
import com.indigo.flow.GenerateDID;
import net.corda.core.flows.FlowException;
import net.corda.core.flows.InitiatedBy;
import net.corda.core.flows.FlowLogic;
import net.corda.core.flows.FlowSession;
import net.corda.examples.oracle.service.service.Oracle;

@InitiatedBy(GenerateDID.class)
public class GenerateDIDHandler extends FlowLogic<Void> {
    private FlowSession session;

    public GenerateDIDHandler(FlowSession session) {
        this.session = session;
    }

    @Override
    @Suspendable
    public Void call() throws FlowException {
        String response = null;
        try {
            // Get the nth prime from the oracle.
            response =  this.getServiceHub().cordaService(Oracle.class).generateDID();
        } catch (Exception e) {
            // Re-throw the exception as a FlowException so its propagated to the querying node.
            throw new FlowException(e);
        }

        session.send(response);
        return null;
    }

    public FlowSession getSession() {
        return session;
    }

    private void setSession(FlowSession session) {
        this.session = session;
    }

}
