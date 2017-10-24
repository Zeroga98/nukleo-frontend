import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
import { Project } from 'app/shared/models/project.model';

@Injectable()
export class ODataProject {

    private entity: string = "Projects";
    private createProjectUrl: string = "Projects/CreateProject";
    public service : ODataService<Project>;
    public createProject : ODataService<Project>;

    constructor(private odataFactory: ODataServiceFactory){
        this.service = this.odataFactory.CreateService<Project>(this.entity);

        this.createProject = this.odataFactory.CreateService<Project>(this.createProjectUrl);
    }
}