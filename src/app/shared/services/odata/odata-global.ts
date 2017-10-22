import { Injectable } from '@angular/core';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
import { Global } from '../../models/global.model';

@Injectable()
export class ODataGlobal {

	private entity: string = "Globals";
    public service : ODataService<Global>;

    constructor(private odataFactory: ODataServiceFactory){
        this.service = this.odataFactory.CreateService<Global>(this.entity);
    }
}