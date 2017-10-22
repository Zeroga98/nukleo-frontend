import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule, AutoCompleteModule, SharedModule } from 'primeng/primeng';
import {BrowserModule} from '@angular/platform-browser';
import {FormlyModule, FormlyBootstrapModule} from 'ng-formly';

import { GlobalRoutingModule } from './global-routing.module';
import { GlobalComponent } from './global.component';
import { GlobalListComponent } from './global-list/global-list.component';

@NgModule({
  imports: [
    CommonModule,
    GlobalRoutingModule,
    DataTableModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  declarations: [
    GlobalComponent,
    GlobalListComponent
  ]
})

export class GlobalModule { }

