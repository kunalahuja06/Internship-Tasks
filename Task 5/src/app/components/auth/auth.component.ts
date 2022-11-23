import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  register:any=false;
  RegisterForm:any=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password:new FormControl('',[Validators.required, Validators.minLength(8)]),
    confirmPassword:new FormControl('',[Validators.required, Validators.minLength(8)]),
  })
  RegisterUser(){
    console.log(this.RegisterForm.value);
  }

  LoginForm:any=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password:new FormControl('',[Validators.required, Validators.minLength(8)]),
  })
  LoginUser(){
    console.log(this.LoginForm.value);
  }

  get email(){
    return this.RegisterForm.get('email') || this.LoginForm.get('Email');
  }
  get password(){
    return this.RegisterForm.get('password') || this.LoginForm.get('Password');
  }
  get confirmPassword(){
    return this.RegisterForm.get('confirmPassword');
  }
}
