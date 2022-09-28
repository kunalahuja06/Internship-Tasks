import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor() {this.pushEmployees(this.employees); }
  public employees = [
  new Employee(1,"Anthony","Moris","Anthony Moris","Sharepoint Practice Head","IT","Seattle","1234567890","live:Anthony","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=90"),
  new Employee(2,"Helen","Zimmermane","Helen Zimmermane","Operations Manager","IT","Seattle","3333333333","live:Helen","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
  new Employee(3,"Jonathon","Smith","Jonathan Smith","Product Manager","IT","Seattle","7768677686","live:Jonathan","https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
  new Employee(4,"Tami","Hopkins","Tami Hopkins","Lead Engineer- Dot Net","IT","India","9696598987","live:Tami","https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
  new Employee(5,"Frankilin","Humark","Frankilin Humark","Network Engineer","IT","India","5463112345","live:Frankilin","https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"),
  new Employee(6,"Angela","Bailey","Angela Bailey","Talent Magnet Jr.","HR","Seattle","0981298651","live:Angela","https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"),
  new Employee(7,"Robert","Mitchell","Robert Mitchell","Software Engineer","IT","India","6548724680","live:Robert","https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
  new Employee(8,"Olivia","Watson","Olivia Watson","UI Designer","UX","Seattle","6421612985","live:Watson","https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"),
  ];

  pushEmployees(employees:object):void { 
    window.localStorage.setItem("employees", JSON.stringify(employees));
  }

  getEmployees():any {
    return JSON.parse(window.localStorage.getItem("employees") || "[]");
  }
  
  addEmployee(e:any):void {
    let employees=this.getEmployees();
    let employee=new Employee(e.id,e.firstName,e.lastName,e.preferredName,e.jobTitle,e.department,e.office,e.phoneNumber,e.skypeId,e.picture);
    employees.push(employee);
    this.pushEmployees(employees);
    this.sendAllEmployees(employees);
  }

  filteredEmployees=new Subject()
  sendFilteredEmployees(employees:any){
    this.filteredEmployees.next(employees);
  }

  showAllEmployees=new Subject();
  sendAllEmployees(employees:any){
    this.showAllEmployees.next(employees);
  }

  searchEmployees=new Subject();
  sendSearchEmployees(employees:any){ 
    this.searchEmployees.next(employees);
  }
    
  AlphabetEmployees=new Subject();
  sendAlphabetEmployees(employees:any){
    this.AlphabetEmployees.next(employees);
  }

  editData=new Subject();
  sendEditData(employee:any){
    this.editData.next(employee);
  }  
  
  setEmployee(employee:any){
    let employees=this.getEmployees();
    let index=employees.findIndex((e:any)=>e.id==employee.id);
    employees[index]=employee;
    this.pushEmployees(employees);
    this.sendAllEmployees(employees);
  }

  employeeFormTitle=''
  
  getCount(filter:any):number{
    let employees:any = this.getEmployees()
    let res=0;
    employees.forEach((emp:any)=>{
      if(emp.department==filter || emp.office.toLowerCase()==filter.toLowerCase() || emp['jobTitle'].toLowerCase()==filter.toLowerCase()){
        res++;
      }
    })
    return res;
  }
}
class Employee{
  id:number;
  preferredName:string;
  firstName:string;
  lastName:string;
  email:string;
  phoneNumber:string;
  skypeId:string;
  jobTitle:string;
  department:string;
  office:string;
  picture:string;

  constructor(id:number,firstname:string,lastname:string,preferredname:string,jobtitle:string,department:string,office:string,phonenumber:string,skypeid:string,picture:string) {
    this.id=id|| JSON.parse(window.localStorage.getItem("employees") || "[]").length+1;
    this.preferredName = preferredname;
    this.firstName = firstname;
    this.lastName = lastname;
    this.email = `${firstname}${lastname}@gmail.com`.toLowerCase();
    this.phoneNumber = phonenumber;
    this.skypeId = skypeid;
    this.jobTitle = jobtitle;
    this.department = department;
    this.office = office;
    this.picture = picture;
  }
  
}
