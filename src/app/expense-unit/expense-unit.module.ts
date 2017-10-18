import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DataTableModule,AutoCompleteModule,SharedModule} from 'primeng/primeng';

import { ExpenseUnitRoutingModule } from 'app/expense-unit/expense-unit-routing.module';
import { ExpenseUnitComponent } from 'app/expense-unit/expense-unit.component';
import { ExpenseUnitListComponent } from './expense-unit-list/expense-unit-list.component';

@NgModule({
  imports: [
    CommonModule,
    ExpenseUnitRoutingModule,
    FormsModule,
    DataTableModule,
    AutoCompleteModule
  ],
  declarations: [
  	ExpenseUnitComponent,
  	ExpenseUnitListComponent
   ]
})
export class ExpenseUnitModule { }
