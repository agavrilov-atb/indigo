import { Utils } from './../utils';
import { IndigoService } from './services/indigo.service';
import { ToastsManager } from 'ng2-toastr';
import { OnInit, ViewContainerRef } from '@angular/core';
export class AbstractComponent{
    
    
    constructor(public indigoService: IndigoService,public toastr: ToastsManager, vcr: ViewContainerRef
      ) {
        this.toastr.setRootViewContainerRef(vcr);
    }
    
}