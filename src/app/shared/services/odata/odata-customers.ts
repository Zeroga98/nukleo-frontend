import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
import { Customer } from 'app/shared/models/customer.model';

@Injectable()
export class ODataCustomer {

	private entity: string = "Customers";
    public service : ODataService<Customer>;

    constructor(private odataFactory: ODataServiceFactory){
        this.service = this.odataFactory.CreateService<Customer>(this.entity);
    }
}