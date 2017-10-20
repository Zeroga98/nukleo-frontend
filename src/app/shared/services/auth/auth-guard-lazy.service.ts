import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { TokenStorageService } from 'app/shared/services/auth/token-storage.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuardLazy implements CanLoad {

    constructor(private tokenStorageService: TokenStorageService,private router:Router) {}
    
    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        console.log(this.tokenStorageService.isAuthenticated())
        if(this.tokenStorageService.isAuthenticated()){
            
            return true;
        }else{
            this.router.navigate(['/login']);
            return false;
        }
    
    }

 
  
}
