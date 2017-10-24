import { Injectable } from '@angular/core';
import { ODataConfiguration } from "angular-odata-es5";

import { Environments } from '../../constansts/environments.constanst';
import { ODataExpenseUnits } from './odata-expense-unit';
import { ODataGlobal } from './odata-global';
import { ODataConcept } from './odata-concept'
import { ODataEmployees } from './odata-employees';
import { ODataCategories } from './odata-categories';
import { ODataProject } from 'app/shared/services/odata/odata-project';
import { ODataCustomer } from 'app/shared/services/odata/odata-customers';
import { ODataProjectType } from 'app/shared/services/odata/odata-project-types';

@Injectable()
export class OData{

    public ExpenseUnit;
    public Global;
    public Concept;
    public Employees;
    public Categories;
    public Project;
    public Customer;
    public ProjectType;
    public ProjectCreate;

    constructor(
    	private odataExpenseUnit: ODataExpenseUnits, 
    	private odataGlobal: ODataGlobal,
    	private odataConcept: ODataConcept,
        private odataEmployees: ODataEmployees,
        private odataCategories: ODataCategories,
        private odataProject: ODataProject,
        private odataCustomer: ODataCustomer,
        private odataProjectType: ODataProjectType
   	){
		this.ExpenseUnit = odataExpenseUnit.service; 	
		this.Global = odataGlobal.service; 	
		this.Concept = odataConcept.service; 	
        this.Employees = odataEmployees.service; 
        this.Categories = odataCategories.service; 
        this.Project = odataProject.service;
        this.Customer = odataCustomer.service;
        this.ProjectType = odataProjectType.service;
        this.ProjectCreate = odataProject.createProject;
    }
}

export function initConfig(){
    let odata = new ODataConfiguration();
    odata.baseUrl = Environments.ODATA_ENDPOINT;
    return odata;
}

