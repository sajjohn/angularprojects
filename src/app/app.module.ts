import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import {EmployeeLinkRenderer} from './employeeLinkRenderer.component';
import {EmployeeDeleteRenderer} from './employeeDeleteRenderer.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
// import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    EmployeeComponent,
    EmployeedetailComponent,
    EmployeeLinkRenderer,
    EmployeeDeleteRenderer,
    AddemployeeComponent,
    // LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    AgGridModule.withComponents([EmployeeLinkRenderer,EmployeeDeleteRenderer]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
