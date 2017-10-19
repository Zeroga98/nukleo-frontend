import { Component, OnInit } from '@angular/core';

import { OData } from '../../shared/services/odata/odata';
import { ExpenseUnit } from '../../shared/models/expense-unit.model';

@Component({
  selector: 'app-expense-unit-list',
  templateUrl: './expense-unit-list.component.html',
  styleUrls: ['./expense-unit-list.component.css']
})
export class ExpenseUnitListComponent implements OnInit {

  public expenseUnits: ExpenseUnit[];

  constructor(private odata: OData) { 
  }

  ngOnInit() {
  	this.odata.ExpenseUnit
  	.Query() 
    .Exec()
    .subscribe((expenseUnits) => {
      this.expenseUnits = expenseUnits;
    },
    error => {
    });
  }

  update(data: ExpenseUnit){
    this.odata.ExpenseUnit
    .Put(data, data.Id)
    .subscribe((expenseUnits) => {
      console.log(this.expenseUnits);
    },
    error => {
    });
  }

}
