import { Component, OnInit, SimpleChanges } from '@angular/core';
import {EmployeeServiceService} from './../../services/employee-service/employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  constructor(private employee:EmployeeServiceService) {
  }
  ngOnInit(): void {
    this.Employees = JSON.parse(window.localStorage.getItem("employees") || "[]");
    this.employee.filteredEmployees.subscribe((employees:any)=>{
      this.Employees=employees
    })
    this.employee.showAllEmployees.subscribe((employees:any)=>{
      this.Employees=employees
    })
    this.employee.AlphabetEmployees.subscribe((employees:any)=>{
      this.Employees=employees
    })
    this.employee.searchEmployees.subscribe((employees:any)=>{
      this.Employees=employees
    })
  }
  Employees:any = [];
}
