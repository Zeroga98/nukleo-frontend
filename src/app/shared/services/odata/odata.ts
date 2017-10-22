import { Injectable } from '@angular/core';
import { ODataConfiguration } from "angular-odata-es5";

import { Environments } from '../../constansts/environments.constanst';
import { ODataExpenseUnits } from './odata-expense-unit'
import { ODataGlobal } from './odata-global'

@Injectable()
export class OData{

    public ExpenseUnit;
    public Global;

    constructor(private odataExpenseUnit: ODataExpenseUnits, private odataGlobal: ODataGlobal){
		this.ExpenseUnit = odataExpenseUnit.service; 	
		this.Global = odataGlobal.service; 	
    }
}

export function initConfig(){
    let odata = new ODataConfiguration();
    odata.baseUrl = Environments.ODATA_ENDPOINT;
    return odata;
}

