import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
  
loginbtn=false;
  constructor(private FormBuilder: FormBuilder) { 
    this.loginForm=this.FormBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(4)]],
    })
  }

  ngOnInit(): void {
  }
login(){
this.loginbtn=true;
if(this.loginForm.valid){
  console.log('Email: , Password:', this.loginForm.value );
  alert("login Successfully");
  this.loginForm.reset();
}else{
  alert("Please Enter Correct Details")
}
    

  }
 get f(){
   return this.loginForm.controls
 }
}
