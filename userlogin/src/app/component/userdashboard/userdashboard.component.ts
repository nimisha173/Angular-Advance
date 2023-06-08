import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit{
  constructor(private route:Router){}
  ngOnInit(): void {
    
  }
  logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

}
