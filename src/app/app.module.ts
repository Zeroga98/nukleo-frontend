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

declare var NProgress: any;

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        MenuLeftComponent,
        MenuRightComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        RouterModule,

        SharedModule,
        SupplierInvoicesModule,
        ExpenseUnitModule,
        
        NgbModule.forRoot(),
        routing
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router) {
    router.events.subscribe((event) => {

      if(event instanceof NavigationStart) {
        NProgress.start();
      }

      if(event instanceof NavigationEnd) {
        setTimeout(function(){
          NProgress.done();
        }, 200);
      }

    });
  }
}
