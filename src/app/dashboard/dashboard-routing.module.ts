import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';
import { UserDashComponent } from './user-dash/user-dash.component';

const routes: Routes = [{path:'',component:UserDashComponent,children:[{path:'comp-a',component:CompAComponent},{path:'comp-b',component:CompBComponent},
{path:'comp-c',component:CompCComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
