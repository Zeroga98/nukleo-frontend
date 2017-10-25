import { NgModule } from '@angular/core';

import { OData } from './odata';
import { ODataExpenseUnits } from './odata-expense-unit';
import { ODataGlobal } from './odata-global';
import { ODataConcept } from './odata-concept';
import { ODataEmployees } from './odata-employees';
import { ODataCategories } from './odata-categories';
import { ODataOrder } from './odata-order';
import { ODataCustomer } from './odata-customer';
import { ODataProject } from './odata-project';
import { ODataProjectType } from './odata-project-types';
import { ODataSupplier } from './odata-supplier';
import { ODataOrderItem } from './odata-order-item';

@NgModule({
    declarations: [],
    imports: [],
    providers: [ 
      OData,
      ODataExpenseUnits,
      ODataGlobal,
      ODataConcept,
      ODataEmployees,
      ODataCategories,
      ODataOrder,
      ODataCustomer,
      ODataProject,
      ODataProjectType,
      ODataSupplier,
      ODataOrderItem
    ]
})

export class ODataModule {
}
