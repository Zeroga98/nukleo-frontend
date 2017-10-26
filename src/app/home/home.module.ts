import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'app/home/home.component';
import { HomeRoutingModule } from 'app/home/home-routing.module';
import { ListDevicesComponent } from './list-devices/list-devices.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ListDevicesComponent
  ]
})
export class HomeModule { }
