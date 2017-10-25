import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
import { ProjectType } from 'app/shared/models/project-type.model';

@Injectable()
export class ODataProjectType {

	private url: string = "ProjectTypes";


    constructor(private odataFactory: ODataServiceFactory){
       
    }

    getAllProjectTypes(){
        return this.odataFactory.CreateService<ProjectType>(this.url);
    }
}