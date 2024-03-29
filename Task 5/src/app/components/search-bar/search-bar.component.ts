import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/services/shared/employee-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  mobileView:boolean =false;

  constructor(private modalService: NgbModal,private employeeService:EmployeeService,private observer:BreakpointObserver) { }
  ngOnInit(): void {
    this.createAlphabetArray();
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
    this.employeeService.searchAlphebetically(alphabet)
  }

  searchInput:string;
  clear(){
    this.searchInput="";
    this.searchFilterInput="preferredName";
    this.showEmployees();
  }

  searchFilterInput:string="preferredName";
  filterChange(){
    this.employeeService.sendSearchFilter(this.searchFilterInput)
    this.search()
  }

  search():void{
    const re = new RegExp(this.searchInput, 'gi');
    let searchedEmployees = this.employeeService.employees.filter((emp: any) => emp[this.searchFilterInput].match(re));
    this.employeeService.sendSearchedEmployees(searchedEmployees)  }
}

