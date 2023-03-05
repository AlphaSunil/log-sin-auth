import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogSinServiceService } from '../services/log-sin-service.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
constructor(private appService:LogSinServiceService, private router:Router){}

  canActivate()
 {
  if(this.appService.loggedIn){
    return true
  }
this.router.navigate(['login'])
  return false
 }

}
