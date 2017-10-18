import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierInvoicesRoutingModule } from 'app/supplier-invoices/supplier-invoices-routing.module';
import { SupplierInvoicesComponent } from 'app/supplier-invoices/supplier-invoices.component';
import { FixSupplierInvoicesComponent } from 'app/supplier-invoices/fix-supplier-invoices/fix-supplier-invoices.component';
import { FormsModule } from '@angular/forms';
import { SupplierInvoicesListComponent } from './supplier-invoices-list/supplier-invoices-list.component';
import {DataTableModule,AutoCompleteModule,SharedModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    SupplierInvoicesRoutingModule,
    FormsModule,
    DataTableModule,
    AutoCompleteModule
  ],
  declarations: [
    SupplierInvoicesComponent,
    FixSupplierInvoicesComponent,
    SupplierInvoicesListComponent
  ]
})
export class SupplierInvoicesModule { }
