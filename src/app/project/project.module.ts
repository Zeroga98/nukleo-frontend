import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from 'app/project/project-routing.module';
import { ProjectListComponent } from 'app/project/project-list/project-list.component';
import { ProjectComponent } from 'app/project/project.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectListActivitiesComponent } from './project-list/project-list-activities/project-list-activities.component';
import { ProjectListExpensesComponent } from './project-list/project-list-expenses/project-list-expenses.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    DataTableModule,
    InputTextModule,
    AutoCompleteModule,
    CalendarModule,
    InputTextareaModule,
    NgbModule
  ],
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    ProjectListActivitiesComponent,
    ProjectListExpensesComponent
  ]
})
export class ProjectModule { }
