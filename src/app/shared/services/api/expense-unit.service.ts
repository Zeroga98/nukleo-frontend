import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environments } from '../../constansts/environments.constanst';

@Injectable()
export class ExpenseUnitService {

  constructor(private http: HttpClient) { }
}
