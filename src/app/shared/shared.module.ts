import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ODataModule } from './services/odata/odata.module';
import { OData, initConfig } from "./services/odata/odata";

import { AuthInterceptor } from "./services/auth/auth-interceptor";
import { AuthService } from "./services/auth/auth.service";
import { ExpenseUnitService } from './services/api/expense-unit.service';
import { StorageService } from './services/api/storage.service';
import { OrderService } from './services/api/orders.service';
import { TokenStorageService } from 'app/shared/services/auth/token-storage.service';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		ODataModule,
	],
	providers: [
		{ provide: ODataConfiguration, useFactory: initConfig },
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
		AuthService,
      	ODataServiceFactory,
		ExpenseUnitService,
		StorageService,
		OrderService,
		TokenStorageService
	]
})
export class SharedModule { }
