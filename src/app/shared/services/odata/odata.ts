import { Injectable } from '@angular/core';
import { ODataConfiguration } from "angular-odata-es5";

import { Environments } from '../../constansts/environments.constanst';
import { ODataExpenseUnits } from './odata-expense-unit';
import { ODataGlobal } from './odata-global';
import { ODataConcept } from './odata-concept'
import { ODataEmployees } from './odata-employees';
import { ODataCategories } from './odata-categories';
import { ODataOrder } from './odata-order';
import { ODataCustomer } from './odata-customer';

@Injectable()
export class OData{

    public ExpenseUnit;
    public Global;
    public Concept;
    public Employees;
    public Categories;
    public Order;
    public Customer;

    constructor(
    	private odataExpenseUnit: ODataExpenseUnits, 
    	private odataGlobal: ODataGlobal,
    	private odataConcept: ODataConcept,
        private odataEmployees: ODataEmployees,
        private odataCategories: ODataCategories,
        private odataOrder: ODataOrder,
        private odataCustomer: ODataCustomer
   	){
		this.ExpenseUnit = odataExpenseUnit.service; 	
		this.Global = odataGlobal.service; 	
		this.Concept = odataConcept.service; 	
        this.Employees = odataEmployees.service; 
        this.Categories = odataCategories.service;
        this.Order = odataOrder.service; 
        this.Customer = odataCustomer.service;
    }
}

export function initConfig(){
    let odata = new ODataConfiguration();
    odata.baseUrl = Environments.ODATA_ENDPOINT;
    return odata;
}

