import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";

@Injectable()
export class ODataEmployees {

	private entity: string = "Employees";
    public service : ODataService<any>;

    constructor(private odataFactory: ODataServiceFactory){
        this.service = this.odataFactory.CreateService<any>(this.entity);
    }
}