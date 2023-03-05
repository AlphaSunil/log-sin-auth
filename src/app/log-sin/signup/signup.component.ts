import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogSinServiceService } from 'src/app/services/log-sin-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private appService:LogSinServiceService){

  }

  signUpData:FormGroup;
  ngOnInit() { this.signUpData = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(4)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    company:new FormControl(''),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl('',[Validators.required])
  })}



  submitData(){
  if(localStorage.getItem(this.signUpData.value.email)){
   return alert('Email already in use !')
  }
  this.appService.loggedIn=true;
  localStorage.setItem(`${this.signUpData.value.email}`,`${this.signUpData.value.email+this.signUpData.value.password}`);
  this.appService.sendData(this.signUpData.value).subscribe({});

}

}
