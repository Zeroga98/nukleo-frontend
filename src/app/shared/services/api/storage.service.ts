import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environments } from '../../constansts/environments.constanst';

@Injectable()
export class StorageService {

  constructor(private http: HttpClient) { }

  liquidateSupplierInvoices(body){
    return this.http.post(
      `${ Environments.SERVICES_ENDPOINT }/ocs/liquidate`,
      body
    );
  }


  getSuppliers(body){
    return this.http.get(
      `${ Environments.SERVICES_ENDPOINT }/commons/get/suppliers`,
      body
    );    
  }

  getBusiness(body){
    return this.http.get(
      `${ Environments.SERVICES_ENDPOINT }/commons/get/business`,
      body
    );    
  }

  searchSupplierInvoices(body){
    return this.http.post(
      `${ Environments.SERVICES_ENDPOINT }/ocs/serch`,
      body
    );    
  }

  getSupplies(body){
    return this.http.post(
      `${ Environments.SERVICES_ENDPOINT }/insumos/serch`,
      body
    );   
  }

  undoOcs(id){

    return this.http.delete(
      'http://grupo-sixties-erp.azurewebsites.net//services/ocs/undo/'+id
    );

  }


}
