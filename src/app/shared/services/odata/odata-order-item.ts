import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";

@Injectable()
export class ODataOrderItem {

	private entity: string = "OrderItems";
    public service : ODataService<any>;

    constructor(private odataFactory: ODataServiceFactory){
        this.service = this.odataFactory.CreateService<any>(this.entity);
    }
}