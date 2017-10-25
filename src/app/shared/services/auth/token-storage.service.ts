import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class TokenStorageService {

  constructor() { }
   

  public getToken(): string {
    let token = JSON.parse(localStorage.getItem('session'));
    if(token){
      return token['access_token'];
    }else{
      return ''
    }
    
  }

  public deleteToken(){
    localStorage.removeItem('session');
  }

  public isAuthenticated(): boolean {
    let token = JSON.parse(localStorage.getItem('session'));
    if(token){
      return true;
    }else{
      return false;
    }
    // return tokenNotExpired(null, token);

  }

  public getEmployeeId(){
    let token = JSON.parse(localStorage.getItem('session'));
    return token['employeeId'];
  }

}
