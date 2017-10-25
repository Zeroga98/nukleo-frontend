import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from 'app/project/project-routing.module';
import { ProjectListComponent } from 'app/project/project-list/project-list.component';
import { ProjectComponent } from 'app/project/project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    InputTextModule,
    AutoCompleteModule,
    CalendarModule,
    InputTextareaModule
  ],
  declarations: [
    ProjectComponent,
    ProjectListComponent
  ]
})
export class ProjectModule { }
