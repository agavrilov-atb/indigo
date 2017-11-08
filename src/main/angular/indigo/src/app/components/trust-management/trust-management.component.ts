import { TrustService } from './services/trust.service';
import { Utils } from './../../utils';
import { IndigoService } from './../../shared/services/indigo.service';
import { NodeInfo, TrustRequest,Trust } from './../../shared/models/corda-network';
import { ToastsManager } from 'ng2-toastr';
import { AbstractComponent } from './../../shared/abstract-component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'trust-management',
  templateUrl: './trust-management.component.html',
  styleUrls: ['./trust-management.component.css']
})
export class TrustManagementComponent extends AbstractComponent implements OnInit {

  me: NodeInfo;
  otherNodeDids:{name:string,did:string}[] = new Array();
  otherPartySelectedDID:string;
  otherPartySelectedName:string;
  mySelectedDID:string;
  displaySpinner:boolean=false;
  trusts:Trust[];
  
  constructor(public trustService:TrustService, public indigoService: IndigoService,public toastr: ToastsManager
    , vcr: ViewContainerRef) {
    super(indigoService,toastr,vcr)
    
      this.fetchMe();
      this.fetchPeers();
      this.getTrusts();

   
  }
  ngOnInit() {
    
  }

  onSelectDID(did){
    this.otherPartySelectedDID=did.did;
    this.otherPartySelectedName=did.name;
  }
  onSelectMyDID(did){
    this.mySelectedDID = did;
  }

  onSetupTrust(formData){
    
    
    let trustRequest:TrustRequest = new TrustRequest()
    trustRequest.myDid = formData.mySelectedDID
    trustRequest.otherPartyDid = formData.otherPartySelectedDID;
    trustRequest.otherPartyName = formData.otherPartySelectedName;
    this.displaySpinner = true;
    this.trustService.setupTrust(trustRequest).then(
      trusts => {
        this.displaySpinner=false
        this.trusts = trusts
        this.toastr.success('A new trust has been established successfully!', 'Success!');
      }
    ).catch(e=>{
      this.displaySpinner=false
      console.log(e)
    }
    )
   
  }

  fetchMe(){
    this.indigoService.fetchMe().then(me => {
      this.me = me;
    }).catch(
    e => {
      console.log(e);
      this.toastr.error(e,'Error');
    });
  }

  fetchPeers(){
    this.indigoService.fetchPeers().then(peers => {
      peers.forEach(peer=>{
        
        if(peer.wallet.storedDIDs){
          console.log(peer.wallet.storedDIDs)
          peer.wallet.storedDIDs.forEach(did=>this.otherNodeDids.push({name:peer.x500Name,did:did}))
        }
       }
      
      )
      
    }).catch(
    e => {
      console.log(e);
      this.toastr.error(e,'Error');
    });

  }

  getTrusts(){

    this.trustService.getTrusts().then(
      trusts=>this.trusts=trusts
    )

  }
}
