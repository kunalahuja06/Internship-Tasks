import { Component, OnInit } from '@angular/core';
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
  }
  Employees=this.employee.getEmployeeFromLocalStorage()
}
