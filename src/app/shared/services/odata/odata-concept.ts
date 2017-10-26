import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
import { Concept } from '../../models/concepts.model';

@Injectable()
export class ODataConcept {

	private entity: string = "Concepts";

    constructor(private odataFactory: ODataServiceFactory){
    }

    public odata(){
    	return this.odataFactory.CreateService<Concept>(this.entity);
    }
}