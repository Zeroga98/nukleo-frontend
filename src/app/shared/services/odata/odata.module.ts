import { NgModule } from '@angular/core';

import { OData } from './odata';
import { ODataExpenseUnits } from './odata-expense-unit';
import { ODataGlobal } from './odata-global';
import { ODataConcept } from './odata-concept';
import { ODataEmployees } from './odata-employees';
import { ODataCategories } from './odata-categories';
import { ODataProject } from 'app/shared/services/odata/odata-project';
import { ODataCustomer } from 'app/shared/services/odata/odata-customers';
import { ODataProjectType } from 'app/shared/services/odata/odata-project-types';

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
      ODataProject,
      ODataCustomer,
      ODataProjectType
    ]
})

export class ODataModule {
}
