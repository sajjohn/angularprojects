import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Employee } from './employee';
import { map } from 'rxjs/operators';
import { Cookie } from 'ng2-cookies';
@Injectable({
	providedIn: 'root'
})
export class EmployeeService {

	constructor(private http: Http) { }

	getEmployees() {
		console.log('The cookie retreived is');
		console.log(Cookie.get('access_token'));
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + Cookie.get('access_token')
		});
		let options = new RequestOptions({ headers: headers });
		return this.http.get('http://localhost:8000/dashboard/employeedashboard/feign/getEmployee', options).pipe
			(map(res => res.json()));
	}

	addEmployee(newEmployee) {
		//console.log('the first_name is'+newContact.first_name);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', 'Bearer ' + Cookie.get('access_token'));
		return this.http.post('http://localhost:8000/dashboard/employeedashboard/feign/addEmployee', newEmployee, { headers: headers })
			.pipe(map(res => res.json()));

	}

	getEmployee(id) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', 'Bearer ' + Cookie.get('access_token'));
		return this.http.get('http://localhost:8000/dashboard/employeedashboard/feign/getEmployee/' + id, { headers: headers }).
			pipe(map(res => res.json()));
	}

	deleteEmployee(id) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', 'Bearer ' + Cookie.get('access_token'));
		return this.http.delete('http://localhost:8000/dashboard/employeedashboard/feign/deleteEmployee/' + id, { headers: headers }).
			pipe(map(res => res.json()));
	}


}
