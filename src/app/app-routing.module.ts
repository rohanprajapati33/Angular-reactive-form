import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { EmployeListComponent } from './employe-list/employe-list.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  },{
  path:'home', component:EmployeListComponent
},
{
  path:'viewall', component:ViewComponent
},
{
  path : 'view/:id/', component : ReactiveFormComponent
},
{
  path:'**', redirectTo: 'home'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
