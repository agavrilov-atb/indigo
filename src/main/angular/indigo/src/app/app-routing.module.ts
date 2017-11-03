import { ProofManagementComponent } from './components/proof-management/proof-management.component';
import { ClaimManagementComponent } from './components/claim-management/claim-management.component';
import { TrustManagementComponent } from './components/trust-management/trust-management.component';
import { NetworkMapComponent } from './components/network-map/network-map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router,Routes, RouterModule} from '@angular/router'

const APP_ROUTES: Routes = [
  { path: 'networkmap', component:NetworkMapComponent},
  { path: 'trust', component:TrustManagementComponent},
  { path: 'claim', component:ClaimManagementComponent},
  { path: 'proof', component:ProofManagementComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
