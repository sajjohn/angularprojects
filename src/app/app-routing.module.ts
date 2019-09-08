import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeedetailComponent} from './employeedetail/employeedetail.component';
import {AddemployeeComponent} from './addemployee/addemployee.component';
//import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';


const routes: Routes = [
{path: 'contactlist', component: ContactsComponent},
{path: 'employeelist/:id', component: EmployeedetailComponent},
{path: 'employeelist', component: EmployeeComponent},
{path: 'addemployee', component: AddemployeeComponent},
// {path: 'logon', component: LoginComponent},
{path: 'home', component: HomeComponent}];
// {path: '', component: HomeComponent,pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
