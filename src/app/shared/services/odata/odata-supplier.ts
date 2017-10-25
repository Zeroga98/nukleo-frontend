import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
//import { Concept } from '../../models/concepts.model';

@Injectable()
export class ODataSupplier {

	private entity: string = "Suppliers";
    public service : ODataService<any>;

    constructor(private odataFactory: ODataServiceFactory){
        this.service = this.odataFactory.CreateService<any>(this.entity);
    }
}