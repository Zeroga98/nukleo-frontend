import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DataTableModule,AutoCompleteModule,SharedModule} from 'primeng/primeng';

import { GlobalRoutingModule } from './global-routing.module';
import { GlobalComponent } from './global.component';
import { GlobalListComponent } from './global-list/global-list.component';

@NgModule({
  imports: [
    CommonModule,
    GlobalRoutingModule,
    FormsModule,
    DataTableModule,
    AutoCompleteModule
  ],
  declarations: [
    GlobalComponent,
    GlobalListComponent
   ]
})

export class GlobalModule { }

