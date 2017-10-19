import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
import { ExpenseUnit } from '../../models/expense-unit.model';

@Injectable()
export class ODataExpenseUnits {

	private entity: string = "ExpenseUnits";
    public service : ODataService<ExpenseUnit>;

    constructor(private odataFactory: ODataServiceFactory){
        this.service = this.odataFactory.CreateService<ExpenseUnit>(this.entity);
    }
}