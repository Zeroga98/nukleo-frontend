import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationStart, NavigationEnd, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TopBarComponent} from './components/top-bar/top-bar.component';
import { MenuLeftComponent } from './components/menu-left/menu-left.component';
import { MenuRightComponent } from './components/menu-right/menu-right.component';
import { FooterComponent } from './components/footer/footer.component';

import { SharedModule } from 'app/shared/shared.module';

import { SupplierInvoicesModule } from 'app/supplier-invoices/supplier-invoices.module';
import { ExpenseUnitModule } from 'app/expense-unit/expense-unit.module';
import { GlobalModule } from 'app/global/global.module';

import { ErrorPageComponent } from 'app/shared/error-page/error-page.component';
import { AuthGuardLazy } from 'app/shared/services/auth/auth-guard-lazy.service';


declare var NProgress: any;

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        MenuLeftComponent,
        MenuRightComponent,
        FooterComponent,
        ErrorPageComponent

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        RouterModule,

        SharedModule,
        
        NgbModule.forRoot(),
        routing
    ],
    providers: [AuthGuardLazy],
    bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router) {
    router.events.subscribe((event) => {

      // if(event instanceof NavigationStart) {
      //   NProgress.start();
      // }

      // if(event instanceof NavigationEnd) {
      //   setTimeout(function(){
      //     NProgress.done();
      //   }, 200);
      // }

    });
  }
}
