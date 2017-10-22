import { NgModule } from '@angular/core';

import { OData } from './odata';
import { ODataExpenseUnits } from './odata-expense-unit';
import { ODataGlobal } from './odata-global';

@NgModule({
    declarations: [],
    imports: [],
    providers: [ 
      OData,
      ODataExpenseUnits,
      ODataGlobal
    ]
})

export class ODataModule {
}
