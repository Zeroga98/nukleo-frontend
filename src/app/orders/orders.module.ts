import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule, AutoCompleteModule, SharedModule } from 'primeng/primeng';
import {BrowserModule} from '@angular/platform-browser';
import {FormlyModule, FormlyBootstrapModule} from 'ng-formly';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersDetailComponent } from './orders-detail/orders-detail.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    DataTableModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  declarations: [
  	OrdersComponent, 
  	OrdersListComponent, OrdersDetailComponent
  ]
})
export class OrdersModule { }
