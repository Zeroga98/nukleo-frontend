import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { TokenStorageService } from 'app/shared/services/auth/token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public tokenStorageService:TokenStorageService,private router:Router) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    let token = this.tokenStorageService.getToken();

  
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${ token }`
        }
      });
    

    return next.handle(request).do(event => {}, err => {
      if (err instanceof HttpErrorResponse && err.status == 401) {
          // handle 401 errors
          this.tokenStorageService.deleteToken();
          this.router.navigate(['/login']);
      }
  });;
  }
}