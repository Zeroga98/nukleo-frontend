import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { OrdersListComponent } from './orders-list/orders-list.component';

const OrdersRoutes: Routes =[
  { path: '', component: OrdersComponent, children: [
      { path: 'orders-list', component: OrdersListComponent }
    ] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OrdersRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class OrdersRoutingModule { }
