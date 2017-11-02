import { NetworkMapComponent } from './components/network-map/network-map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router,Routes, RouterModule} from '@angular/router'

const APP_ROUTES: Routes = [
  { path: 'networkmap', component:NetworkMapComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
