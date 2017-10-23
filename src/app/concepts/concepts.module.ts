import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule, AutoCompleteModule } from 'primeng/primeng';
import {BrowserModule} from '@angular/platform-browser';
import {FormlyModule, FormlyBootstrapModule} from 'ng-formly';

import { ConceptsRoutingModule } from './concepts-routing.module';
import { ConceptsComponent } from './concepts.component';
import { ConceptsListComponent } from './concepts-list/concepts-list.component';

@NgModule({
	imports: [
		CommonModule,
		DataTableModule,
		AutoCompleteModule,
		FormsModule,
		ConceptsRoutingModule,
		ReactiveFormsModule,
	    FormlyModule.forRoot(),
	    FormlyBootstrapModule
	],
	declarations: [ConceptsComponent, ConceptsListComponent]
})
export class ConceptsModule { }
