import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogSinServiceService {

  constructor(private http: HttpClient) { }

loggedIn=false;

isLoggedIn(email,token){
 if(localStorage.getItem(email)===token){
this.loggedIn=true
 }
}


sendData(data: any) {
  const url = 'https://webhook.site/b55e02ad-7a2a-4c41-9f30-c5c6501dee66';
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  let postOpt = Object.assign({ headers: headers, method: 'post' });
  // console.log(data)


    return this.http.post(url, data, postOpt);
  }
}
