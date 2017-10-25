import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
import { ProjectType } from 'app/shared/models/project-type.model';

@Injectable()
export class ODataProjectType {

	private entity: string = "ProjectTypes";
    public service : ODataService<ProjectType>;

    constructor(private odataFactory: ODataServiceFactory){
        this.service = this.odataFactory.CreateService<ProjectType>(this.entity);
    }
}