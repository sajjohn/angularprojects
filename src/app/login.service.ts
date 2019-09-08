import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Logondata} from  './logondata';
import {map} from 'rxjs/operators';
import { Cookie } from 'ng2-cookies';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

public redirect_ui:string = 'http://localhost:4200/';

 constructor(private http: Http) { }

getAccessToken(code){

	let params=new URLSearchParams();
	// console.log('username'+logonData.username);
	// console.log('password'+logonData.password);

	// params.append('username',logonData.username);
	// params.append('password',logonData.password);
	
	params.append('grant_type','authorization_code');
	params.append('client_id','ui');
	params.append('redirect_uri',this.redirect_ui);
	params.append('code',code);
	let headers=new Headers({'Content-Type':'application/x-www-form-urlencoded; charset=utf-8',
		'Authorization':'Basic '+btoa("ui:secret")});
 	let options= new RequestOptions({headers: headers});
  	//console.log('the first_name is'+newContact.first_name);
  	//var headers = new Headers();
  	//headers.append('Content-Type','application/x-www-form-urlencoded; charset=utf-8');
  	//headers.append('Authorization','Basic '+btoa("spring-security-oauth2-read-client:spring-security-oauth2-read-client-password1234"))
	 this.http.post('http://localhost:8080/oauth/token', params.toString(),options).pipe(map(res => res.json())).subscribe(
		  data => this.saveAccessToken(data), 
		  err => alert("Invalid Credentials")
	  );
  	// .pipe(map(res => res.json()));

  }

	saveAccessToken(token){
	var expireDate = new Date().getTime() + (1000 * token.expires_in);
	console.log('the token value is->'+token.access_token);
	console.log('the token expireDate is->'+expireDate);
	Cookie.set("access_token",token.access_token,expireDate);
	window.location.href='http://localhost:4200';
	}

	checkCredentials(){
    if (!Cookie.check('access_token')){
        return false;
    }else{
		console.log('##########');
		console.log(Cookie.get('access_token'));
		
    	return true;
    }
	  }
	  
	deleteCookie(){
		Cookie.delete('access_token');
		window.location.href=this.redirect_ui;
	}


}	
