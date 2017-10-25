import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
import { Order } from '../../models/order.model';

@Injectable()
export class ODataOrder {

	private entity: string = "Orders";
    public service : ODataService<Order>;

    constructor(private odataFactory: ODataServiceFactory){
        this.service = this.odataFactory.CreateService<Order>(this.entity);
    }
}