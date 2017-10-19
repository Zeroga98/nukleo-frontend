import { Component, OnInit } from '@angular/core';

import { OData } from '../../shared/services/odata/odata';

@Component({
  selector: 'app-expense-unit-list',
  templateUrl: './expense-unit-list.component.html',
  styleUrls: ['./expense-unit-list.component.css']
})
export class ExpenseUnitListComponent implements OnInit {

  constructor(private odata: OData) { 
  }

  ngOnInit() {
  	this.odata.ExpenseUnit
  	.Query() 
    .Exec()
    .subscribe(
    expenseUnits => {
        console.log(expenseUnits);
    },
    error => {
    });

  }

}
