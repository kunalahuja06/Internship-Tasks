import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { EmployeeServiceService } from './../../services/employee-service/employee-service.service';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private employee:EmployeeServiceService) {
   }
  ngOnInit(): void {
  }
  employeeForm:any = new FormGroup({
    preferredName: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z0-9 ]+$')]),
    lastName: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    skypeId: new FormControl('',[Validators.required,Validators.pattern('^[l]+[i]+[v]+[e]+[:]+[A-Za-z0-9 ]+$')]),
    jobTitle: new FormControl(''),
    department: new FormControl(''),
    office: new FormControl(''),
    picture: new FormControl('')
  })

  saveEmployee():void{
    this.employee.addEmployee(this.employeeForm.value);
    // alert("Employee Added Successfully");

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
}
