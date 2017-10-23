import { Component, OnInit } from '@angular/core';
import _ from "lodash";

import { OData } from '../../shared/services/odata/odata';
import { Global } from '../../shared/models/global.model';
import GlobalForms from '../../shared/forms/global.forms';

@Component({
	selector: 'app-global-list',
	templateUrl: './global-list.component.html',
	styleUrls: ['./global-list.component.css']
})
export class GlobalListComponent implements OnInit {

	public globalCreate = { Name: "" };
	public global: Global[];
	public form = GlobalForms.initForm();
	public dataFields = GlobalForms.getCreateFields();

	constructor(private odata: OData) { }

	ngOnInit() {
		this.getEmployeesAll();
		this.getAll();
	}

	public getAll() {
		this.odata.Global
			.Query()
			.Exec()
			.subscribe((global) => {
				this.global = global;
			},
			error => {
			});
	}

	public create(data: Global) {
		if(data){
			this.odata.Global
			.Post(data)
			.subscribe((global) => {
				this.global.push(global);
				console.log(this.global);
			},
			error => {
			});
		}
	}

	public update(data: Global) {
		this.odata.ExpenseUnit
			.Put(data, data.Id);
	}

	public delete(globalId, index) {
		this.odata.Global
			.Delete(globalId)
			.subscribe((global) => {
				this.global.splice(index, 1);
			},
			error => {
				console.log(error);
			});
	}

	public getEmployeesAll() {
		return this.odata.Employees
			.Query()
			.Exec()
			.subscribe((employees) => {
				_.find(this.dataFields[0].fieldGroup, { key: 'ResponsableId' }).templateOptions.options = employees.map(function(employee) {
					return {
						value: employee.Id,
						label: `${employee.FirstName} ${(employee.LastName === null ? '' : employee.LastName)}`
					}
				});
			},
			error => {
			});
	}

}
