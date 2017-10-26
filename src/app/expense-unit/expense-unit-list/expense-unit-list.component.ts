import { Component, OnInit } from '@angular/core';

import { OData } from '../../shared/services/odata/odata';
import { ExpenseUnit } from '../../shared/models/expense-unit.model';
import ExpenseUnitForms from '../../shared/forms/expense-unit.forms';

@Component({
  selector: 'app-expense-unit-list',
  templateUrl: './expense-unit-list.component.html',
  styleUrls: ['./expense-unit-list.component.css']
})
export class ExpenseUnitListComponent implements OnInit {

  public expenseUnits: ExpenseUnit[];
  public fieldCreate = { Name: "" };
  public form = ExpenseUnitForms.initForm();
  public dataFields = ExpenseUnitForms.getCreateFields();

  constructor(private odata: OData) {}

  ngOnInit() {
    this.getGlobalAll();
    this.getEmployeesAll();
  	this.getAll();
  }

  public getAll(){
    this.odata.ExpenseUnit.getAllExpenseUnits()
    .Query() 
    .Exec()
    .subscribe((expenseUnits) => {
      this.expenseUnits = expenseUnits;
    },
    error => {
    });
  }

  public create(data: ExpenseUnit) {
    if(data){
      this.odata.ExpenseUnit.getAllExpenseUnits()
      .Post(data)
      .subscribe((expenseUnit) => {
        this.expenseUnits.push(expenseUnit);
        console.log(this.expenseUnits);
      },
      error => {
      });
    }
  }

  public update(data: ExpenseUnit){
    this.odata.ExpenseUnit.getAllExpenseUnits()
    .Put(data, data.Id)
    .subscribe((expenseUnits) => {},
    error => {
      console.log(error);
    });
  }

  public delete(expenseUnitId, index){
    this.odata.ExpenseUnit.getAllExpenseUnits()
    .Delete(expenseUnitId)
    .subscribe((expenseUnits) => {
      this.expenseUnits.splice(index, 1);
    },
    error => {
      console.log(error);
    });
  }

  public getGlobalAll() {
    return this.odata.Global
      .Query()
      .Exec()
      .subscribe((globals) => {
        this.dataFields[0].fieldGroup.find(field => {
          return field.key == 'GlobalId';
        }).templateOptions.options = globals.map(function(global) {
          return {
            value: global.Id,
            label: global.Name
          }
        });
      },
      error => {
      });
  }

  public getEmployeesAll() {
    return this.odata.Employees
      .Query()
      .Exec()
      .subscribe((employees) => {
        this.dataFields[0].fieldGroup.find( field => {
          return field.key == 'ResponsableId';
        }).templateOptions.options = employees.map(function(employee) {
          return {
            value: employee.Id,
            label: `${employee.FirstName} ${(employee.LastName === null ? '' : employee.LastName)}`
          }
        });
      },
      error => {
      });
  }

}
