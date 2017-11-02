import { Utils } from './../../utils';
import { IndigoService } from './../../shared/services/indigo.service';
import { me } from './../../shared/models/corda-network';
import { ToastsManager } from 'ng2-toastr';
import { AbstractComponent } from './../../shared/abstract-component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'trust-management',
  templateUrl: './trust-management.component.html',
  styleUrls: ['./trust-management.component.css']
})
export class TrustManagementComponent extends AbstractComponent implements OnInit {

  public me: me;
  get myDID(): string {
    if (this.me) {
      return this.me.me.sovrinDID;
    }
  }

  constructor(public indigoService: IndigoService,public toastr: ToastsManager
    , vcr: ViewContainerRef) {
    super(indigoService,toastr,vcr)
    debugger;
    this.indigoService.fetchMe().then(me => {
                    console.log(me);
                     this.me = me;
              //       this.toastr.success(this.meShort + ' ,welcome to Corda-Sovrin!', 'Success!');
                   }).catch(
                   e => {
                     console.log(e);
                     this.toastr.error(e,'Error');
                   });
  }
  ngOnInit() {
    
  }
  
}
