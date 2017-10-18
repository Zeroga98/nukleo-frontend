import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExpenseUnitService {

  constructor(private http: HttpClient) { }

  liquidateSupplierInvoices(body){
    return this.http.post(
      'http://grupo-sixties-erp.azurewebsites.net/services/ocs/liquidate',
      body
    );
  }

  getSuppliers(body){
    return this.http.get(
      'http://grupo-sixties-erp.azurewebsites.net/services/commons/get/suppliers',
      body
    );    
  }
}
