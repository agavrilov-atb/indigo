import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trust',
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.css']
})
export class TrustComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
