import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';
import { PatientService } from './patient.service';
import { Doctor } from './doctor.model';
import { Patient } from './patient.model';
@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  selectedDoctor: Doctor;
  patient: Patient[];
  constructor(private doctorService: DoctorService, private patientService: PatientService) { }
  ngOnInit() {
    this.doctorService.selectedDoctor.subscribe((doctor: Doctor) => {
      this.selectedDoctor = doctor;
      this.patient = this.patientService.getPatientsByDoctor(doctor.id);
    });
  }
  allocatePatient(patient: Patient) {
    this.patientService.allocateDoctor(patient, this.selectedDoctor);
  }
}