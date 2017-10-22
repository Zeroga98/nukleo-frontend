import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GlobalComponent } from './global.component';
import { GlobalListComponent } from './global-list/global-list.component';

const GlobalRoutes: Routes =[
  { path: '', component: GlobalComponent, children: [
      { path: 'global-list', component: GlobalListComponent }
    ] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GlobalRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class GlobalRoutingModule { }
