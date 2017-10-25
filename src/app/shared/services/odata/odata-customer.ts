import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
//import { Concept } from '../../models/concepts.model';

@Injectable()
export class ODataCustomer {

	private entity: string = "Customers";
    public service : ODataService<any>;

    constructor(private odataFactory: ODataServiceFactory){
        this.service = this.odataFactory.CreateService<any>(this.entity);
    }
}