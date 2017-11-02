import { ToastsManager } from 'ng2-toastr';
import { OnInit, ViewContainerRef } from '@angular/core';
export class AbstractComponent{
    
    constructor(public toastr: ToastsManager, vcr: ViewContainerRef){
        this.toastr.setRootViewContainerRef(vcr);
    }

}