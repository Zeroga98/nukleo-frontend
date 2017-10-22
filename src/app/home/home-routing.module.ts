import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { AuthGuardEager } from 'app/shared/services/auth/auth-guard-eager.service';

const homeRoutes: Routes =[
  { path: '', component: HomeComponent,canActivate: [AuthGuardEager]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports:[RouterModule],
  declarations: [],
  providers: [AuthGuardEager]
})
export class HomeRoutingModule { }