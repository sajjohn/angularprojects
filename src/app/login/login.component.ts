// import { Component, OnInit } from '@angular/core';
// import {LoginService} from '../login.service';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms'
// import { Router} from '@angular/router';
// import {Logondata} from '../logondata';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//  	  private username: string;
//     private password: string;
//     private logonDataForm: FormGroup;
//     private logonData= new Logondata();
//   constructor(private loginService: LoginService, private router: Router,private fb: FormBuilder) { }


//   saveLogonData(){

//     // const logonData= {
//     //   username : this.username,
//     //   password : this.password
      
//     // }

//     this.populateValues();
//     this.loginService.getAccessToken(this.logonData).subscribe
//     (data => this.saveToken(data),
//      err => alert("Invalid Credentials"));

//    	}

//   ngOnInit() {
//     this.buildForm();
// 	  }

// 	saveToken(token){
// 	  	this.loginService.saveAccessToken(token);
// 	  	this.router.navigate(['/home']);
//     }
    

//   buildForm(){
//     this.logonDataForm=this.fb.group({username: ['',Validators.required],
//                                       password: ['',Validators.required]});
//   }

//   populateValues(){
//     this.logonData.username=this.logonDataForm.get('username').value;
//     this.logonData.password=this.logonDataForm.get('password').value;


//   }


// }
