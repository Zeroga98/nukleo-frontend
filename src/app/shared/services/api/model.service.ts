import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environments } from '../../constansts/environments.constanst';

@Injectable()
export class ModelService {

  constructor(private http: HttpClient) { }

  models(body){
    return this.http.get(
      `${ Environments.SERVICES_ENDPOINT }/maker/models/get-all`,
      body
    );
  }
  getDevicesModel(body){
    return this.http.get(
      `${ Environments.SERVICES_ENDPOINT }/maker/devices/get-by-model/3`,
      body
    );
  }

  
}
