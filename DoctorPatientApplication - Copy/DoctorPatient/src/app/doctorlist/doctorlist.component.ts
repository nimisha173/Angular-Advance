import { Component, OnInit } from '@angular/core';
import{doctor}
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit{
  doctor: Doctor[] | undefined;
  constructor(private doctorService: DoctorService) { }
  ngOnInit() {
    this.doctor = this.doctorService.getDoctors();
  }
  selectDoctor(doctorId: number) {
    this.doctorService.selectDoctor(doctorId);
  }
}


