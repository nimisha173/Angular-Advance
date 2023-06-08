
import { Injectable } from '@angular/core';
import { Doctor } from './doctor.model';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor() { }
  doctors: Doctor[] = [
    { id: 1, name: 'Dr. John Doe', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', specialization: 'Pediatrics' },
    { id: 3, name: 'Dr. David Johnson', specialization: 'Orthopedics' },
  ];
  selectedDoctorId: number;
  getDoctors(): Doctor[] {
    return this.doctors;
  }
  selectDoctor(doctorId: number) {
    this.selectedDoctorId = doctorId;
  }
}