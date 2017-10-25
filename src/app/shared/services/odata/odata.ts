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
import { ODataProject } from 'app/shared/services/odata/odata-project';
import { ODataSupplier } from 'app/shared/services/odata/odata-supplier';
import { ODataProjectType } from 'app/shared/services/odata/odata-project-types';
import { ODataOrderItem } from './odata-order-item';

@Injectable()
export class OData{

    public ExpenseUnit;
    public Global;
    public Concept;
    public Employees;
    public Categories;
    public Order;
    public Customer;
    public Project;
    public ProjectType;
    public ProjectCreate;
    public Supplier;
    public OrderItem;

    constructor(
    	private odataExpenseUnit: ODataExpenseUnits, 
    	private odataGlobal: ODataGlobal,
    	private odataConcept: ODataConcept,
        private odataEmployees: ODataEmployees,
        private odataCategories: ODataCategories,
        private odataOrder: ODataOrder,
        private odataProject: ODataProject,
        private odataCustomer: ODataCustomer,
        private odataProjectType: ODataProjectType,
        private odataSupplier: ODataSupplier,
        private odataOrderItem: ODataOrderItem
   	){
		this.ExpenseUnit = odataExpenseUnit.service; 	
		this.Global = odataGlobal.service; 	
		this.Concept = odataConcept.service; 	
        this.Employees = odataEmployees.service; 
        this.Categories = odataCategories.service;
        this.Order = odataOrder.service; 
        this.Customer = odataCustomer.service;
        this.Categories = odataCategories.service; 
        this.Project = odataProject.service;
        this.ProjectType = odataProjectType.service;
        this.ProjectCreate = odataProject.createProject;
        this.Supplier = odataSupplier.service;
        this.OrderItem = odataOrderItem.service;
    }
}

export function initConfig(){
    let odata = new ODataConfiguration();
    odata.baseUrl = Environments.ODATA_ENDPOINT;
    return odata;
}

