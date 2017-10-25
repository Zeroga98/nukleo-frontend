import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
//import { Concept } from '../../models/concepts.model';

@Injectable()
export class ODataCustomer {

	private url: string = "Customers";

    constructor(private odataFactory: ODataServiceFactory){
    }

    getAllCustomers(){
        return this.odataFactory.CreateService<any>(this.url);
    }
}