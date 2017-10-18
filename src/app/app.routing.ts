import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboards/alpha', pathMatch: 'full' },
  { path:'supplier-invoices',loadChildren:'app/supplier-invoices/supplier-invoices.module#SupplierInvoicesModule' },
  { path: '**', redirectTo: 'pages/page-404' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules });
