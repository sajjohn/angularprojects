import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import { Router} from '@angular/router';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  employeeId: number;
  employeeName: string;
  employeeDesignation: string;
  employeeExperience: number;
  employeeAddress: string;
  constructor(private employeeService: EmployeeService,private router: Router) { }


  addEmployee(){

    const newEmployee= {
      employeeId : this.employeeId,
      employeeName : this.employeeName,
      employeeDesignation : this.employeeDesignation,
      employeeExperience : this.employeeExperience,
      employeeAddress : this.employeeAddress
    }
    this.employeeService.addEmployee(newEmployee).subscribe
    (employees => {this.router.navigate(['/employeelist']);
      
    });

    
  }

  ngOnInit() {
  }

}
