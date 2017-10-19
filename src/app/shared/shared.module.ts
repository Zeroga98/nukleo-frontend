import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';
import { HttpModule } from '@angular/http';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular2-odata";

import { ODataModule } from './services/odata/odata.module';
import { OData, initConfig } from "./services/odata/odata";

import { ExpenseUnitService } from './services/api/expense-unit.service';
import { StorageService } from './services/api/storage.service';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		ODataModule 
	],
	providers: [
		{ provide: ODataConfiguration, useFactory: initConfig },
      	ODataServiceFactory,
		ExpenseUnitService,
		StorageService,
	]
})
export class SharedModule { }
