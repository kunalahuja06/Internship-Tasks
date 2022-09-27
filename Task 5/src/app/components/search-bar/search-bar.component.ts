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
    this.employee.employeeFormTitle="Add Employee"
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
    this.createArray();
  }

  alphabets:string[]=[]
  public createArray():void{
    for(let i=97;i<=122;i++){
      this.alphabets.push(String.fromCodePoint(i))
    }
  }
  showAllEmployees():void{
    this.employee.sendAllEmployees(this.employee.employees)
  }
  searchByAlphabets(alphabet:any):void{
    let employees=this.employee.getEmployeeFromLocalStorage()
    let filteredEmployees=employees.filter((employee:any)=>employee.preferredName.toLowerCase().startsWith(alphabet))
    this.employee.sendAlphabetEmployees(filteredEmployees)
  }
  searchInput:string;
  searchFilterInput:string;

  search():void{
    let employees=this.employee.getEmployeeFromLocalStorage()
    const re = new RegExp(this.searchInput, 'gi');
    let searchedEmployees = employees.filter((emp: any) => emp[this.searchFilterInput].match(re));
    this.employee.sendSearchEmployees(searchedEmployees)
  }
}

