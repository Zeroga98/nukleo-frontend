import { Injectable } from '@angular/core';
import { ODataConfiguration } from "angular-odata-es5";

import { Environments } from '../../constansts/environments.constanst';
import { ODataExpenseUnits } from './odata-expense-unit';
import { ODataGlobal } from './odata-global';
import { ODataConcept } from './odata-concept'
import { ODataEmployees } from './odata-employees';

@Injectable()
export class OData{

    public ExpenseUnit;
    public Global;
    public Concept;
    public Employees;

    constructor(
    	private odataExpenseUnit: ODataExpenseUnits, 
    	private odataGlobal: ODataGlobal,
    	private odataConcept: ODataConcept,
        private odataEmployees: ODataEmployees,
   	){
		this.ExpenseUnit = odataExpenseUnit.service; 	
		this.Global = odataGlobal.service; 	
		this.Concept = odataConcept.service; 	
        this.Employees = odataEmployees.service; 
    }
}

export function initConfig(){
    let odata = new ODataConfiguration();
    odata.baseUrl = Environments.ODATA_ENDPOINT;
    return odata;
}

