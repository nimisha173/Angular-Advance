// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { DoctorlistComponent } from './doctorlist/doctorlist.component';
// import { PatientlistComponent } from './patientlist/patientlist.component';
// import { AllocationComponent } from './allocation/allocation.component';
// import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
// import { PatientdetailsComponent } from './patientdetails/patientdetails.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     DoctorlistComponent,
//     PatientlistComponent,
//     AllocationComponent,
//     DoctordetailsComponent,
//     PatientdetailsComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { AllocationComponent } from './allocation/allocation.component';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorlistComponent,
    PatientlistComponent,
    AllocationComponent,
    DoctordetailsComponent,
    PatientdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
