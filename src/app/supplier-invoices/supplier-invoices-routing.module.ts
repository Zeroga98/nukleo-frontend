import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SupplierInvoicesComponent } from 'app/supplier-invoices/supplier-invoices.component';
import { FixSupplierInvoicesComponent } from 'app/supplier-invoices/fix-supplier-invoices/fix-supplier-invoices.component';
import { SupplierInvoicesListComponent } from 'app/supplier-invoices/supplier-invoices-list/supplier-invoices-list.component';

const supplierInvoicesRoutes: Routes =[
  { path: '', component: SupplierInvoicesComponent, children: [
      { path: 'fix-supplier-invoices', component: FixSupplierInvoicesComponent },
      { path: 'supplier-invoices-list', component: SupplierInvoicesListComponent }
    ] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(supplierInvoicesRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class SupplierInvoicesRoutingModule { }
