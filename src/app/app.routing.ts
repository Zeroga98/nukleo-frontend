import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ErrorPageComponent } from 'app/shared/error-page/error-page.component';
import { AuthGuardLazy } from 'app/shared/services/auth/auth-guard-lazy.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home',loadChildren:'app/home/home.module#HomeModule',
  canLoad: [AuthGuardLazy]},
  { path:'login',loadChildren:'app/login/login.module#LoginModule' },
  { path:'supplier-invoices',loadChildren:'app/supplier-invoices/supplier-invoices.module#SupplierInvoicesModule', canLoad: [AuthGuardLazy] },
  { path:'expense-unit',loadChildren:'app/expense-unit/expense-unit.module#ExpenseUnitModule', canLoad: [AuthGuardLazy] },
  { path:'global',loadChildren:'app/global/global.module#GlobalModule', canLoad: [AuthGuardLazy] },
  { path: 'error-page', component:ErrorPageComponent },
  { path: '**', redirectTo: 'error-page' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules });
