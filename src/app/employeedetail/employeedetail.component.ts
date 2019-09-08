import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  /*employeeId: number;
  employeeName: string;
  employeeDesignation: string;
  employeeExperience: number;
  employeeAddress: string;*/
  employee$: Observable<Employee>;

  constructor(private employeeService: EmployeeService,private router: Router,
  	private route: ActivatedRoute) { }


  ngOnInit() {
  	this.employee$=this.route.paramMap.pipe(switchMap((params: ParamMap)=>
  		this.employeeService.getEmployee(params.get("id"))))
  	//.subscribe(employee=>{
  		//this.employee=employee;
  		/*this.employeeId=employee.employeeName;
  		this.employeeName=employee.employeeName;
  		this.employeeDesignation=employee.employeeDesignation;
  		this.employeeExperience=employee.employeeExperience;
  		this.employeeAddress=employee.employeeAddress;*/
  	//})

  }

}
