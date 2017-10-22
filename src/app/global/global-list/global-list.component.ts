import { Component, OnInit } from '@angular/core';

import { OData } from '../../shared/services/odata/odata';
import { Global } from '../../shared/models/global.model';

@Component({
	selector: 'app-global-list',
	templateUrl: './global-list.component.html',
	styleUrls: ['./global-list.component.css']
})
export class GlobalListComponent implements OnInit {

	public global: Global[];

	constructor(private odata: OData) { }

	ngOnInit() {
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

	public update(data: Global) {
		this.odata.ExpenseUnit
			.Put(data, data.Id);
	}

	public delete(globalId) {
		console.log(globalId);
		this.odata.Global
			.Delete(globalId)
			.subscribe((global) => {
				console.log(global);
			},
			error => {
				console.log(error);
			});
	}

}
