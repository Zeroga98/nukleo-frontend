import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboards/alpha', pathMatch: 'full' },{ path:'login',loadChildren:'app/login/login.module#LoginModule' },
  { path:'login',loadChildren:'app/login/login.module#LoginModule' },
  { path:'supplier-invoices',loadChildren:'app/supplier-invoices/supplier-invoices.module#SupplierInvoicesModule' },
  { path:'expense-unit',loadChildren:'app/expense-unit/expense-unit.module#ExpenseUnitModule' },
  { path:'global',loadChildren:'app/global/global.module#GlobalModule' },
  { path: '**', redirectTo: 'pages/page-404' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules });
