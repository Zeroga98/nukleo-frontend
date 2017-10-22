import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TokenStorageService } from 'app/shared/services/auth/token-storage.service';


@Injectable()
export class AuthGuardEager implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService,private router:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if(this.tokenStorageService.isAuthenticated()){
        
        return true;
    }else{
        this.router.navigate(['/login']);
        return false;
    }
  }
}
