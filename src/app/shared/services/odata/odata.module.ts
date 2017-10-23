import { NgModule } from '@angular/core';

import { OData } from './odata';
import { ODataExpenseUnits } from './odata-expense-unit';
import { ODataGlobal } from './odata-global';
import { ODataConcept } from './odata-concept';
import { ODataEmployees } from './odata-employees';
import { ODataCategories } from './odata-categories';

@NgModule({
    declarations: [],
    imports: [],
    providers: [ 
      OData,
      ODataExpenseUnits,
      ODataGlobal,
      ODataConcept,
      ODataEmployees,
      ODataCategories
    ]
})

export class ODataModule {
}
