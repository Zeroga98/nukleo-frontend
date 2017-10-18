import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StorageService {

  constructor(private http: HttpClient,) { }

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

  getBusiness(body){
    return this.http.get(
      'http://grupo-sixties-erp.azurewebsites.net/services/commons/get/business',
      body
    );    
  }

  searchSupplierInvoices(body){
    return this.http.post(
      'http://grupo-sixties-erp.azurewebsites.net/services/ocs/serch',
      body
    );    
  }

  getSupplies(body){
    return this.http.post(
      'http://grupo-sixties-erp.azurewebsites.net//services/insumos/serch',
      body
    );   
  }

  undoOcs(id){

    return this.http.delete(
      'http://grupo-sixties-erp.azurewebsites.net//services/ocs/undo/'+id
    );

  }


}
