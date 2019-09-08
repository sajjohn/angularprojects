import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
	selector: 'link-cell',
	template: '<a routerLink="/employeelist/{{empId}}"  >{{empId}}</a>'
	//template: '{{params.data.employeeId}}'
})

export class EmployeeLinkRenderer implements ICellRendererAngularComp {
	public params: any;
	empId: any;


	


	agInit(params: any){
		this.params= params;
		this.empId= params.data.employeeId;
	}

	refresh(){
		return false;
	}
}