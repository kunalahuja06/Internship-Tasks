import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { EmployeeServiceService } from './../../services/employee-service/employee-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private employee:EmployeeServiceService,private modalService: NgbModal) {
   }
   employeeFormTitle:any=this.employee.employeeFormTitle
   closeModal():void{
    this.modalService.dismissAll();
  }
  ngOnInit(): void {
    this.employee.editData.subscribe((employee:any)=>{
      this.a=employee;
      this.show(this.a)
    })
  }
  updateFilterCount():void{
    let filters=document.querySelectorAll('.filter-li')
    filters.forEach((filter:any)=>{
      filter.children[1].textContent=`(${this.employee.getCount(filter.children[0].textContent)})`
    })
  }
  show(a:any):void{
    this.employeeForm = new FormGroup({
      id:new FormControl(a.id),
      preferredName: new FormControl(a.preferredName,[Validators.required]),
      firstName: new FormControl(a.firstName,[Validators.required]),
      lastName: new FormControl(a.lastName,[Validators.required]),
      email: new FormControl(a.email,[Validators.required,Validators.email]),
      phoneNumber: new FormControl(a.phoneNumber,[Validators.required]),
      skypeId: new FormControl(a.skypeId,[Validators.required]),
      jobTitle: new FormControl(this.a.jobTitle,[Validators.required]),
      department: new FormControl(a.department,[Validators.required]),
      office: new FormControl(a.office,[Validators.required]),
      picture: new FormControl(a.picture,[Validators.required])
    })
  }
  a:any={}

  employeeForm:any = new FormGroup({
    id: new FormControl(''),
    preferredName: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z0-9 ]+$')]),
    lastName: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    skypeId: new FormControl('',[Validators.required,Validators.pattern('^[l]+[i]+[v]+[e]+[:]+[A-Za-z0-9]+$')]),
    jobTitle: new FormControl([Validators.required]),
    department: new FormControl('',[Validators.required]),
    office: new FormControl('',[Validators.required]),
    picture: new FormControl('')
  })
  saveEmployee():void{
    if(!this.employeeForm.get('id').value){
      this.employee.addEmployee(this.employeeForm.value);
      alert("Employee Added Successfully");
      this.modalService.dismissAll();
    }else{
      this.employee.setEmployee(this.employeeForm.value);
      alert("Employee Modified Successfully");
      this.modalService.dismissAll();
    }
    this.updateFilterCount()
  }
  get id(){
    return this.employeeForm.get('id')
  }
  get preferredName(){
    return this.employeeForm.get('preferredName');
  }
  get firstName(){ 
    return this.employeeForm.get('firstName');
  }
  get lastName(){
    return this.employeeForm.get('lastName');
  }
  get email(){
    return this.employeeForm.get('email');
  }
  get phoneNumber(){
    return this.employeeForm.get('phoneNumber');
  }
  get skypeId(){
    return this.employeeForm.get('skypeId');
  }
  get picture(){
    return this.employeeForm.get('picture');
  }
  get jobTitle(){
    return this.employeeForm.get('jobTitle');
  }
  get department(){
    return this.employeeForm.get('department');
  }
  get office(){
    return this.employeeForm.get('office');
  }
  
}
