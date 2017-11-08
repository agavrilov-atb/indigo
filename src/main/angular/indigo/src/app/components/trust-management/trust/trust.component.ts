import { Trust } from './../../../shared/models/corda-network';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trust',
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.css']
})
export class TrustComponent implements OnInit {

  @Input() title;
  @Input() trusts:Trust[];
  constructor() { }

  ngOnInit() {
  }

}
