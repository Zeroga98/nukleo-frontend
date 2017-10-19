import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { ExpenseUnitService } from './services/api/expense-unit.service';
import { StorageService } from './services/api/storage.service';

@NgModule({
	imports: [
		CommonModule,
	],
	providers: [
		ExpenseUnitService,
		StorageService,
	]
})
export class SharedModule { }
