import { Component } from '@angular/core';
import { TokenStorageService } from 'app/shared/services/auth/token-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
})
export class AppComponent {

    constructor(private tokenStorageService:TokenStorageService){
        
    }

    checkAuthenticated(){
        return this.tokenStorageService.isAuthenticated();
    }
}
