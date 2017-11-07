import { WalletService } from './components/wallet-management/service/wallet.service';
import { AppRoutingModule } from './app-routing.module';
import { CustomOption } from './shared/custom-toaster';
import { ToastOptions } from 'ng2-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { IndigoService } from './shared/services/indigo.service';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatOptionModule,
  MatFormFieldModule,
  MatStepperModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { NetworkMapComponent } from './components/network-map/network-map.component';
import { TrustManagementComponent } from './components/trust-management/trust-management.component';
import { TrustComponent } from './components/trust-management/trust/trust.component';
import { ClaimManagementComponent } from './components/claim-management/claim-management.component';
import { ProofManagementComponent } from './components/proof-management/proof-management.component';
import { ClaimComponent } from './components/claim-management/claim/claim.component';
import { ClaimDefComponent } from './components/claim-management/claim-def/claim-def.component';
import { ClaimReqComponent } from './components/claim-management/claim-req/claim-req.component';
import { ProofsIssuedComponent } from './components/proof-management/proofs-issued/proofs-issued.component';
import { ProofsRequestedComponent } from './components/proof-management/proofs-requested/proofs-requested.component';
import { ProofsReceivedComponent } from './components/proof-management/proofs-received/proofs-received.component';
import { WalletManagementComponent } from './components/wallet-management/wallet-management.component';
@NgModule({
  declarations: [
    AppComponent,
    LeftNavBarComponent,
    NetworkMapComponent,
    TrustManagementComponent,
    TrustComponent,
    ClaimManagementComponent,
    ProofManagementComponent,
    ClaimComponent,
    ClaimDefComponent,
    ClaimReqComponent,
    ProofsIssuedComponent,
    ProofsRequestedComponent,
    ProofsReceivedComponent,
    WalletManagementComponent
  ],
  imports: [
    ToastModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule, 
    HttpModule, 
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatOptionModule,
    MatFormFieldModule,
    MatStepperModule,
    BrowserAnimationsModule,
    CdkTableModule,
    AppRoutingModule
    
  ],
  providers: [WalletService,IndigoService, {provide: ToastOptions, useClass: CustomOption}],
  bootstrap: [AppComponent]
})
export class AppModule { }
