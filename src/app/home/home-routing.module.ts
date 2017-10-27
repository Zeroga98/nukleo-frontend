import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { AuthGuardEager } from 'app/shared/services/auth/auth-guard-eager.service';

import { ListDevicesComponent } from 'app/home/list-devices/list-devices.component';

const homeRoutes: Routes =[
  { path: '', component: HomeComponent,canActivate: [AuthGuardEager],children: [
    { path: 'devices-list/:model_id', component: ListDevicesComponent }
  ] }
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
