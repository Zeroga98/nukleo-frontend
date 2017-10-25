import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { OData } from '../../shared/services/odata/odata';
import { Order } from '../../shared/models/order.model';
import { OrderService } from '../../shared/services/api/orders.service';

@Component({
	selector: 'app-orders-list',
	templateUrl: './orders-list.component.html',
	styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

	public orders: Order[];
	public suppliers: any[];
	public customers: any[];
	public typeOrder: string;
	public searchText: string;
	public resultsSearch: string[];
	public newOrder = { Origin: {}, TypeId: 0 };
	public openEdit: boolean = false;

	constructor(private odata: OData, private router: Router, private activatedRoute: ActivatedRoute, private orderService: OrderService) { }

	ngOnInit() {
		this.activatedRoute.parent.params.subscribe(params => {
			this.typeOrder = params["type"];
			this.newOrder.TypeId = (this.typeOrder == 'customer') ? 0 : 1;

			if (this.typeOrder == 'customer') {
				this.getCustomerAll();
			} else {
				this.getSupplierAll();
			}

			this.getAll();
		});
	}

	public getAll() {
		this.odata.Order
			.Query()
			.Expand("OrderItems, Customer, Supplier")
			.Filter("Type eq " + ((this.typeOrder == 'customer') ? "'Customer'" : "'Supplier'"))
			.Exec()
			.subscribe((orders) => {
				this.orders = orders.map(data => {
					if(data.Customer){
						data.Customer.Name = data.Customer.FirstName;
					}
					data.StatusName = this.parserOrderState(data.Status);
					return data;
				});
			},
			error => {
			});
	}

	public create(data) {
		if (data) {
			data.OriginId = data.Origin.Id;
			delete data["Origin"];
			this.orderService
				.create(data)
				.subscribe((response: any) => {
					let order = JSON.parse(response.value);
					if(this.typeOrder == 'customer'){
						order.Customer = this.customers.find(customer => {
							return customer.Id == order.CustomerId;
						});
					} else {
						order.Supplier = this.suppliers.find(supplier => {
							return supplier.Id == order.SupplierId;
						});
					}
					this.orders.push(order);
				},
				error => {
				});
		}
	}

	public getSupplierAll() {
		this.odata.Supplier
			.Query()
			.Exec()
			.subscribe((suppliers) => {
				this.suppliers = suppliers;
			},
			error => {
			});
	}

	public getCustomerAll() {
		this.odata.Customer
			.Query()
			.Exec()
			.subscribe((customers) => {
				this.customers = customers.map(data => {
					data.Name = data.FirstName;
					return data;
				});
			},
			error => {
			});
	}

	public search(event) {
		this.resultsSearch = eval("this." + this.typeOrder + "s").filter((data) => {
			return data.Name.indexOf(event.query) != -1;
		});
	}

	private parserOrderState(data){
		if(data == 0 || data == 'WaitingForResponse'){
			return "Esperando";
		} else if(data == 1 || data == 'Accepted'){
			return "Aceptada";
		} else if(data == 2 || data == 'Rejected'){
			return "Rechazada";
		} else if(data == 3 || data == 'WaitingForPreBill'){
			return "Esperando 2";
		} else if(data == 4 || data == 'PreBilled'){
			return "Esperando 3";
		} else if(data == 5 || data == 'Billed'){
			return "Pagada";
		} else if(data == 6 || data == 'Cancelled'){
			return "Cancelada";
		}
	}
}
