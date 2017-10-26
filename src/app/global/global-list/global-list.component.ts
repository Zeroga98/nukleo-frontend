import { Component, OnInit } from '@angular/core';

import { OData } from '../../shared/services/odata/odata';
import { Global } from '../../shared/models/global.model';
import GlobalForms from '../../shared/forms/global.forms';

@Component({
	selector: 'app-global-list',
	templateUrl: './global-list.component.html',
	styleUrls: ['./global-list.component.css']
})
export class GlobalListComponent implements OnInit {

	public global: Global[];
	public fieldCreate = { Name: "" };
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
		this.odata.ExpenseUnit.getAllExpenseUnits()
			.Put(data, data.Id)
			.subscribe((global) => {
			},
			error => {
				console.log(error);
			});
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
				this.dataFields[0].fieldGroup.find(field => {
					return field.key == 'ResponsableId';
				}).templateOptions.options = employees.map(function(employee) {
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
