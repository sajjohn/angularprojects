import { Component, OnInit, ViewChild } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import { Router} from '@angular/router';
import {EmployeeLinkRenderer} from '../employeeLinkRenderer.component';
import {EmployeeDeleteRenderer} from '../employeeDeleteRenderer.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees : Employee[];
  employee: Employee;
  /*employeeId: number;
  employeeName: string;
  employeeDesignation: string;
  employeeExperience: number;
  employeeAddress: string;*/
  //router: Router;
  context: any;
  frameworkComponents: any;
  paginationPageSize: any;
  columnDefs = [
  {headerName: 'Employee Id', field:'employeeId', cellRenderer: 'employeeLinkRenderer'},
  {headerName: 'Employee Name', field:'employeeName'},
  {headerName: 'Employee Designation', field:'employeeDesignation'},
  {headerName: 'Employee Experience', field:'employeeExperience'},
  {headerName: 'Employee Address', field:'employeeAddress', width: 110},
  {headerName: 'Delete', field:'employeeId', cellRenderer: 'employeeDeleteRenderer'}];

  rowData: any;
  
  


  constructor(private employeeService: EmployeeService, private router: Router) { 
    this.frameworkComponents= {employeeLinkRenderer: EmployeeLinkRenderer, employeeDeleteRenderer: EmployeeDeleteRenderer  };
      this.context= {componentParent: this };
      this.paginationPageSize= 5;
    }

  

  addEmployee(){

    /*const newEmployee= {
      employeeId : this.employeeId,
      employeeName : this.employeeName,
      employeeDesignation : this.employeeDesignation,
      employeeExperience : this.employeeExperience,
      employeeAddress : this.employeeAddress
    }
    this.employeeService.addEmployee(newEmployee).subscribe
    (employees => {this.employees=employees;
      this.employeeService.getEmployees().subscribe(employees => {
      this.employees=employees;
      this.rowData=employees;
    });
    });*/
    this.router.navigate(['/addemployee']);



    
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees=employees;
      this.rowData=employees;
    });
  }

  deleteEmpDetails(id: number){
    console.log('the id passed is'+id);
    this.employeeService.deleteEmployee(id).subscribe(employees=>{
      this.employees=employees;
      this.employeeService.getEmployees().subscribe(employees => {
      this.employees=employees;
      this.rowData=employees;
    })
    //this.router.navigate(['/employeelist',{id: id}]);
  });
  }

}

