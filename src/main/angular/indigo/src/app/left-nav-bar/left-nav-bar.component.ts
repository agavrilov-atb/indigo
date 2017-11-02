import { Utils } from './../utils';
import { IndigoService } from './../shared/services/indigo.service';
import { me } from './../shared/models/me';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'in-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css']
})
export class LeftNavBarComponent implements OnInit {

  public me: me;
  get meShort(): string {
    if (this.me) {
      return Utils.getShortName(this.me.me);
    }
  }
  constructor(private indigoService: IndigoService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {
    this.indigoService.fetchMe().then(me => {
                     this.me = me;
                     this.toastr.success(this.meShort + ' ,welcome to Corda-Sovrin!', 'Success!');
                   }).catch(
                   e => {
                     console.log(e);
                     this.toastr.error(e,'Error');
                   });
  }
}
