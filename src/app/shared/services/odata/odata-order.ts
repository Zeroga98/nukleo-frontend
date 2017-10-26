import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
import { Order } from '../../models/order.model';

@Injectable()
export class ODataOrder {

	private entity: string = "Orders";

    constructor(private odataFactory: ODataServiceFactory){
    }

    public odata(){
    	return this.odataFactory.CreateService<Order>(this.entity);	
    }
}