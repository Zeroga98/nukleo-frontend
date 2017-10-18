import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseUnitComponent } from 'app/expense-unit/expense-unit.component';
import { ExpenseUnitListComponent } from 'app/expense-unit/expense-unit-list/expense-unit-list.component';

const ExpenseUnitRoutes: Routes =[
  { path: '', component: ExpenseUnitComponent, children: [
      { path: 'expense-unit-list', component: ExpenseUnitListComponent }
    ] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExpenseUnitRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ExpenseUnitRoutingModule { }
