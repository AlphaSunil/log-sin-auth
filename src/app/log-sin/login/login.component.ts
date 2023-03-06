import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogSinServiceService } from 'src/app/services/log-sin-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 constructor(private appService:LogSinServiceService){

 }

  loginData:FormGroup;
  ngOnInit() {
    this.loginData = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])

    })
  }


  get email(){
    return this.loginData.get('email')
  }
  get password(){
    return this.loginData.get('password')
  }

  submitData(){

    this.appService.sendData(this.loginData.value).subscribe({});
this.appService.isLoggedIn(this.loginData.value.email,this.loginData.value.email+this.loginData.value.password)
  }


}
