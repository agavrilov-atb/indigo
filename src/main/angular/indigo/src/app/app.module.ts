import { AppRoutingModule } from './app-routing.module';
import { CustomOption } from './shared/custom-toaster';
import { ToastOptions } from 'ng2-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { IndigoService } from './shared/services/indigo.service';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
@NgModule({
  declarations: [
    AppComponent,
    LeftNavBarComponent,
    NetworkMapComponent
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
  providers: [IndigoService, {provide: ToastOptions, useClass: CustomOption}],
  bootstrap: [AppComponent]
})
export class AppModule { }
