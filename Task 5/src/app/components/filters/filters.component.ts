import { Component, OnInit, Input,AfterViewInit } from '@angular/core';
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
  ngAfterViewInit(): void {
    let jtUl=document.querySelectorAll('.filter-ul')[2]
    jtUl.classList.add('mb-0')
    for(let i=5;i<jtUl.children.length;i++){
      jtUl.children[i].classList.add('d-none')
    }

    let filters=document.querySelectorAll('.filter-li')
    filters.forEach((filter:any)=>{
      filter.children[1].textContent=`(${this.employee.getCount(filter.children[0].textContent)})`
    })
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
  
  viewMoreBtn='view more'
  viewMoreCheck=false;
  viewMoreToggler():void{
    let jtUl=document.querySelectorAll('.filter-ul')[2]
    jtUl.classList.add('mb-0')
    for(let i=5;i<jtUl.children.length;i++){
      jtUl.children[i].classList.toggle('d-none')
    }
    this.viewMoreCheck=!this.viewMoreCheck
    if(this.viewMoreCheck){
      this.viewMoreBtn='view less'
    }else{
      this.viewMoreBtn='view more'
    }
  }

}

