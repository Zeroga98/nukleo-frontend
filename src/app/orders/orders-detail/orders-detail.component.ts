import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { OData } from '../../shared/services/odata/odata';
import { Order } from '../../shared/models/order.model';
import { Concept } from '../../shared/models/concepts.model';

@Component({
	selector: 'app-orders-detail',
	templateUrl: './orders-detail.component.html',
	styleUrls: ['./orders-detail.component.css']
})
export class OrdersDetailComponent implements OnInit {

	public orderId;
	public order: Order;
	public concepts: Concept[];
	public resultsSearchConcept: any[];
	public newItem: any = { ConceptName: "" , OrderId: undefined };

	constructor(private odata: OData, private router: Router, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			this.orderId = params["id"];
			this.newItem.OrderId = this.orderId;
			this.getOrderById();
		});
		this.getConceptsAll();
	}

	private getOrderById(){
		this.odata.Order
			.odata()
			.Get(this.orderId)
			.Expand("OrderItems, Customer, Supplier")
			.Exec()
			.subscribe((order) => {
				this.order = order;
				this.order.StatusName = Order.parseState(this.order.Status);
				console.log(this.order);
			},
			error => {
			});
	}

	public addOrderItem(newItem){
		let item: any = {};
		item.ConceptCode = newItem.Concept.Id.toString();
		item.ConceptName = newItem.Concept.Name;
		item.OrderId = newItem.OrderId;
		item.Quantity = newItem.Quantity;
		//item.Pieces = newItem.Pieces;
		this.odata.OrderItem
		.Post(item)
		.subscribe((_item) => {
			this.order.OrderItems.push(_item);
			this.newItem = { ConceptName: "" , OrderId: undefined };
		},
		error => {
		});
	}

	private getConceptsAll() {
		this.odata.Concept
			.Query()
			.Expand("Category")
			.Filter("Type eq 'Concept'")
			.Exec()
			.subscribe((concepts) => {
				console.log(concepts);
				this.concepts = concepts;
			},
			error => {
			});
	}

	public searchConcept(event) {
		this.resultsSearchConcept = this.concepts.filter((data) => {
			return data.Name.indexOf(event.query) != -1;
		});
	}

}
