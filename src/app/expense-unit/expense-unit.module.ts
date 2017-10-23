import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataTableModule,AutoCompleteModule} from 'primeng/primeng';
import {BrowserModule} from '@angular/platform-browser';
import {FormlyModule, FormlyBootstrapModule} from 'ng-formly';

import { ExpenseUnitRoutingModule } from 'app/expense-unit/expense-unit-routing.module';
import { ExpenseUnitComponent } from 'app/expense-unit/expense-unit.component';
import { ExpenseUnitListComponent } from './expense-unit-list/expense-unit-list.component';

@NgModule({
  imports: [
    CommonModule,
    ExpenseUnitRoutingModule,
    FormsModule,
    DataTableModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  declarations: [
  	ExpenseUnitComponent,
  	ExpenseUnitListComponent
   ]
})
export class ExpenseUnitModule { }
