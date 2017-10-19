import { NgModule } from '@angular/core';

import { OData } from './odata';
import { ODataExpenseUnits } from './odata-expense-unit';

@NgModule({
    declarations: [],
    imports: [],
    providers: [ 
      OData,
      ODataExpenseUnits
    ]
})

export class ODataModule {
}
