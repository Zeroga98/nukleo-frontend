import { NgModule } from '@angular/core';

import { OData } from './odata';
import { ODataExpenseUnits } from './odata-expense-unit';
import { ODataGlobal } from './odata-global';
import { ODataConcept } from './odata-concept';
import { ODataEmployees } from './odata-employees';
import { ODataCategories } from './odata-categories';
import { ODataOrder } from './odata-order';
import { ODataCustomer } from './odata-customer';

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
      ODataCustomer
    ]
})

export class ODataModule {
}
