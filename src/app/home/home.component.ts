import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { Router} from '@angular/router';
import { Cookie } from 'ng2-cookies';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	loggedIn: boolean = false;
	
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    console.log("Inside Home Page");
    //Cookie.delete('access_token');
    this.loggedIn=this.loginService.checkCredentials();
    console.log('The value of loggedin flag=>'+this.loggedIn);
    let i=window.location.href.indexOf("code");
    console.log('The value of code is '+i);
    if(!this.loggedIn && i != -1){
      this.loginService.getAccessToken(window.location.href.substring(i+5));
    }
  	// if(!this.loginService.checkCredentials()){
  	// 	this.router.navigate(['/logon']);
  	// }
  }

  login(){
    window.location.href='http://localhost:8080/oauth/authorize?response_type=code&client_id=ui&redirect_uri='+this.loginService.redirect_ui;
  }

  logout(){
    this.loginService.deleteCookie();
  }


}
