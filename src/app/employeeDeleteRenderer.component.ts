import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
	selector: 'link-cell',
	template: '<input type="button" class="btn btn-info" (click)="invokeParentMethod(empId)" value="Delete"/>'
	//template: '{{params.data.employeeId}}'
})

export class EmployeeDeleteRenderer implements ICellRendererAngularComp {
	public params: any;
	empId: any;


	


	agInit(params: any){
		this.params= params;
		this.empId= params.data.employeeId;
	}

	invokeParentMethod(empId: any){
		this.params.context.componentParent.deleteEmpDetails(empId);
	}

	refresh(){
		return false;
	}
}