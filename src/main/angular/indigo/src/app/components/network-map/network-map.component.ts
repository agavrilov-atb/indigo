import { Peer } from './../../shared/models/corda-network';
import { ToastsManager } from 'ng2-toastr';
import { AbstractComponent } from './../../shared/abstract-component';
import { IndigoService } from './../../shared/services/indigo.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-network-map',
  templateUrl: './network-map.component.html',
  styleUrls: ['./network-map.component.css']
})
export class NetworkMapComponent extends AbstractComponent implements OnInit {

  peers:Peer[]
  constructor(private indigoService:IndigoService,public toastr: ToastsManager, vcr: ViewContainerRef) { 
    super(toastr,vcr)
  }

  ngOnInit() {
    this.indigoService.fetchPeers().then(data=>this.peers = data)
                                  .catch(e => {console.log(e);
                                  this.toastr.error(e,'Error');})
  }

}
