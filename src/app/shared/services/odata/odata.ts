import { Injectable } from '@angular/core';
import { ODataConfiguration } from "angular2-odata";

import { Environments } from '../../constansts/environments.constanst';
import { ODataExpenseUnits } from './odata-expense-unit'

@Injectable()
export class OData{

    public ExpenseUnit;

    constructor(private odataExpenseUnit: ODataExpenseUnits){
		this.ExpenseUnit = odataExpenseUnit.service; 	
    }
}

export function initConfig(){
    let odata = new ODataConfiguration();
    odata.baseUrl = Environments.ODATA_ENDPOINT;
    return odata;
}

