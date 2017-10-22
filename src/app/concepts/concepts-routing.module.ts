import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ConceptsComponent } from './concepts.component';
import { ConceptsListComponent } from './concepts-list/concepts-list.component';

const ConceptsRoutes: Routes =[
  { path: '', component: ConceptsComponent, children: [
      { path: 'concepts-list', component: ConceptsListComponent }
    ] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ConceptsRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ConceptsRoutingModule { }
