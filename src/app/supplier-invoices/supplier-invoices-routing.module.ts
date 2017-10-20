import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SupplierInvoicesComponent } from 'app/supplier-invoices/supplier-invoices.component';
import { FixSupplierInvoicesComponent } from 'app/supplier-invoices/fix-supplier-invoices/fix-supplier-invoices.component';
import { SupplierInvoicesListComponent } from 'app/supplier-invoices/supplier-invoices-list/supplier-invoices-list.component';
import { AuthGuardEager } from 'app/shared/services/auth/auth-guard-eager.service';

const supplierInvoicesRoutes: Routes =[
  { path: '', component: SupplierInvoicesComponent,canActivate: [AuthGuardEager], children: [
      { path: 'fix-supplier-invoices', component: FixSupplierInvoicesComponent,canActivate: [AuthGuardEager] },
      { path: 'supplier-invoices-list', component: SupplierInvoicesListComponent,canActivate: [AuthGuardEager] }
    ] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(supplierInvoicesRoutes)
  ],
  exports:[RouterModule],
  declarations: [],
  providers: [AuthGuardEager]
})
export class SupplierInvoicesRoutingModule { }
