import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
import { ExpenseUnit } from '../../models/expense-unit.model';

@Injectable()
export class ODataExpenseUnits {

	private url: string = "ExpenseUnits";
    
    constructor(private odataFactory: ODataServiceFactory){
       
    }

    getAllExpenseUnits(){
        return this.odataFactory.CreateService<ExpenseUnit>(this.url);
    }
}