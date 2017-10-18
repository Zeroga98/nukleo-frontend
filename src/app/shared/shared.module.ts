import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { ExpenseUnitService } from './services/expense-unit.service';
import { StorageService } from './services/storage.service';

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
