import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './log-sin/login/login.component';
import { SignupComponent } from './log-sin/signup/signup.component';

const routes: Routes = [{
  path:'login',component:LoginComponent
},
{path:'signup',component:SignupComponent},
{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule),canActivate:[AuthGuard]},{path:'**',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
