import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { OData } from '../../shared/services/odata/odata';
import { Order } from '../../shared/models/order.model';

@Component({
	selector: 'app-orders-list',
	templateUrl: './orders-list.component.html',
	styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

	public orders: Order[];
	public employees: any[];
	public customers: any[];
	public typeOrder: string;
	public searchText: string;
	public resultsSearch: string[];
	public newOrder = { Origin: {}, TypeId: 0 };

	constructor(private odata: OData, private router: Router, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.parent.params.subscribe(params => {
			this.typeOrder = params["type"];
			this.typeOrder = (this.typeOrder == 'supplier') ? 'employee' : this.typeOrder;
			this.newOrder.TypeId = (this.typeOrder == 'customer') ? 0 : 1;

			if (this.typeOrder == 'customer') {
				this.getCustomerAll();
			} else {
				this.getEmployeesAll();
			}
		});
		this.getAll();
	}

	public getAll() {
		this.odata.Order
			.Query()
			.Expand("OrderItems, Customer, Supplier")
			.Filter("Type eq " + ((this.typeOrder == 'customer') ? "'Customer'" : "'Supplier'"))
			.Exec()
			.subscribe((orders) => {
				this.orders = orders;
				console.log(this.orders);
			},
			error => {
			});
	}

	public create(data) {
		if (data) {
			data.OriginId = data.Origin.Id;
			delete data["Origin"];
			console.log(data);
			//http://tec-api-administration.azurewebsites.net/odata/Orders/CreateOrder
			this.odata.Concept
				.Post(data)
				.subscribe((data) => {
					this.orders.push(data);
					console.log(data);
				},
				error => {
				});
		}
	}

	public getEmployeesAll() {
		this.odata.Employees
			.Query()
			.Exec()
			.subscribe((employees) => {
				this.employees = employees;
			},
			error => {
			});
	}

	public getCustomerAll() {
		this.odata.Customer
			.Query()
			.Exec()
			.subscribe((customers) => {
				this.customers = customers;
			},
			error => {
			});
	}

	public search(event) {
		this.resultsSearch = eval("this." + this.typeOrder + "s").filter((data) => {
			return data.FirstName.indexOf(event.query) != -1;
		});
	}


}
