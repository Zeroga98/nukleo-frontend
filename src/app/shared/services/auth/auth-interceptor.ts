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

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public tokenStorageService:TokenStorageService) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    let token = this.tokenStorageService.getToken();

  
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${ token }`
        }
      });
    

    return next.handle(request);
  }
}