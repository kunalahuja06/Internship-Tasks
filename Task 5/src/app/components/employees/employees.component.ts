import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/shared/employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  mobileView: boolean=false;
  constructor(private employeeService:EmployeeService, private observer:BreakpointObserver) {
  }
  ngOnInit(): void {
    this.employees = JSON.parse(window.localStorage.getItem("employees") || "[]");

    this.employeeService.filteredEmployees.subscribe((employees:any)=>{
      this.employees=employees
    })

    this.employeeService.showAllEmployees.subscribe((employees:any)=>{
      this.employees=employees
    })

    this.employeeService.AlphabetEmployees.subscribe((employees:any)=>{
      this.employees=employees
    })

    this.employeeService.searchEmployees.subscribe((employees:any)=>{
      this.employees=employees
    })

    this.observer.observe([
      Breakpoints.Small,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if(result.matches){
        this.mobileView = true;
      }
      else{
        this.mobileView = false;
      }
    });
  }
  employees:any = [];
}
