import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptsRoutingModule } from './concepts-routing.module';
import { ConceptsComponent } from './concepts.component';
import { ConceptsListComponent } from './concepts-list/concepts-list.component';

@NgModule({
  imports: [
    CommonModule,
    ConceptsRoutingModule
  ],
  declarations: [ConceptsComponent, ConceptsListComponent]
})
export class ConceptsModule { }
