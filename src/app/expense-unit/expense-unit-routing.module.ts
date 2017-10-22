import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseUnitComponent } from 'app/expense-unit/expense-unit.component';
import { ExpenseUnitListComponent } from 'app/expense-unit/expense-unit-list/expense-unit-list.component';
import { AuthGuardEager } from 'app/shared/services/auth/auth-guard-eager.service';

const ExpenseUnitRoutes: Routes =[
  { path: '', component: ExpenseUnitComponent,canActivate: [AuthGuardEager], children: [
      { path: 'expense-unit-list', component: ExpenseUnitListComponent ,canActivate: [AuthGuardEager]}
    ] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExpenseUnitRoutes)
  ],
  exports:[RouterModule],
  declarations: [],
  providers: [AuthGuardEager]
})
export class ExpenseUnitRoutingModule { }
