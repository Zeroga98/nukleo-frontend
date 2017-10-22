import { Component } from '@angular/core';
import { AuthService } from 'app/shared/services/auth/auth.service';

@Component({
  selector: 'cat-top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {

  constructor(private authService:AuthService) { }
  
  onSignout() {
    this.authService.logout();
  }
}
