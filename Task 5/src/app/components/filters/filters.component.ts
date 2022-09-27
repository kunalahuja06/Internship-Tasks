import { Component, OnInit, Input } from '@angular/core';
import { EmployeeServiceService } from './../../services/employee-service/employee-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  constructor(private employee: EmployeeServiceService) { }

  @Input() filter:any
  @Input() title:any

  ngOnInit(): void {
  }

  getFilteredEmployees(e:any):void{
    let filter=e.target.innerText
    let employees:any=[]
    this.employee.employees.forEach(employeee => {
      if(employeee.department.toLowerCase()==filter.toLowerCase() || employeee.office.toLowerCase()==filter.toLowerCase() || employeee.jobTitle.toLowerCase()==filter.toLowerCase()){
        employees.push(employeee)
      }
    });
    this.employee.sendFilteredEmployees(employees)
  }
}

