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

  constructor(private odata: OData) {}

  ngOnInit() {
  	this.getAll();
  }

  public getAll(){
    this.odata.ExpenseUnit
    .Query() 
    .Exec()
    .subscribe((expenseUnits) => {
      this.expenseUnits = expenseUnits;
    },
    error => {
    });
  }

  public update(data: ExpenseUnit){
    this.odata.ExpenseUnit
    .Put(data, data.Id);
  }

  public delete(expenseUnitId, index){
    this.odata.ExpenseUnit
    .Delete(expenseUnitId)
    .subscribe((expenseUnits) => {
      console.log(expenseUnits);
      this.expenseUnits.splice(index, 1);
    },
    error => {
      console.log(error);
    });
  }

}
