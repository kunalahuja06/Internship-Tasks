import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/services/shared/employee-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private modalService: NgbModal,private employeeService:EmployeeService) {}

  ngOnInit(): void {
    this.createAlphabetArray();
  }

  openVerticallyCentered(content: any){
    this.employeeService.employeeFormTitle="Add Employee"
    this.modalService.open(content, { centered: true });  
  }

  alphabets:string[]=[]
  public createAlphabetArray():void{
    for(let i=97;i<=122;i++){
      this.alphabets.push(String.fromCodePoint(i))
    }
  }

  showEmployees():void{
    this.employeeService.sendAllEmployees(this.employeeService.employees)
  }

  searchByAlphabets(alphabet:any):void{
    let employees=this.employeeService.getEmployees()
    let searchedEmployees=employees.filter((employee:any)=>employee.preferredName.toLowerCase().startsWith(alphabet))
    this.employeeService.sendAlphabetEmployees(searchedEmployees)
  }

  searchInput:string;
  searchFilterInput:string="preferredName";

  search():void{
    let employees=this.employeeService.getEmployees()
    const re = new RegExp(this.searchInput, 'gi');
    let searchedEmployees = employees.filter((emp: any) => emp[this.searchFilterInput].match(re));
    this.employeeService.sendSearchEmployees(searchedEmployees)
  }
}

