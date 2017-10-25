import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environments } from '../../constansts/environments.constanst';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  create(body){
    return this.http.post(
      `${ Environments.ODATA_ENDPOINT }/Orders/CreateOrder`,
      { Order: body }
    );
  }
}
