import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeServiceService } from 'src/app/services/employee-service/employee-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private modalService: NgbModal,private employee:EmployeeServiceService) {}

   openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
    this.createArray();
  }

  searchFilter:string[]=['preferred name','first name','last name','email','job title','office','deaprtment','phone number','skype id']
  alphabets:string[]=[]
  public createArray():void{
    for(let i=97;i<=122;i++){
      this.alphabets.push(String.fromCodePoint(i))
    }
  }
  showAllEmployees():void{
    this.employee.sendAllEmployees(this.employee.employees)
  }
  searchInput:string;
  searchFilterInput:string;
}

