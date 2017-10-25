import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
import { Project } from 'app/shared/models/project.model';

@Injectable()
export class ODataProject {

    private url: string = "Projects";


    constructor(private odataFactory: ODataServiceFactory){

    }

    getAllProjects(){
        return this.odataFactory.CreateService<Project>(this.url);
    }

    createProject(){
        return this.odataFactory.CreateService<Project>(this.url+'/CreateProject');
    }

    getProjectExpenses(id){
        return this.odataFactory.CreateService<Project>(this.url+'/('+id+')/Expenses');
    }
    
}