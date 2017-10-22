import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule, AutoCompleteModule } from 'primeng/primeng';

import { ConceptsRoutingModule } from './concepts-routing.module';
import { ConceptsComponent } from './concepts.component';
import { ConceptsListComponent } from './concepts-list/concepts-list.component';

@NgModule({
	imports: [
		CommonModule,
		DataTableModule,
		AutoCompleteModule,
		FormsModule,
		ConceptsRoutingModule
	],
	declarations: [ConceptsComponent, ConceptsListComponent]
})
export class ConceptsModule { }
