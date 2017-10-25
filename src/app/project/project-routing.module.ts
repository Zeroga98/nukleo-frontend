import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from 'app/project/project-list/project-list.component';
import { ProjectComponent } from 'app/project/project.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardEager } from 'app/shared/services/auth/auth-guard-eager.service';

const projectRoutes: Routes =[
  { path: '', component: ProjectComponent,canActivate: [AuthGuardEager], children: [
      { path: 'project-list', component: ProjectListComponent,canActivate: [AuthGuardEager] }
    ] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(projectRoutes)
  ],
  exports:[RouterModule],
  declarations: [],
  providers: [AuthGuardEager]
})
export class ProjectRoutingModule { }
