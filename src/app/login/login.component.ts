import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'app/shared/services/auth/auth.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
    if($('body').attr('class')!=='cat__config--vertical cat__menu-left--colorful'){
      $('body').toggleClass('cat__menu-left--visible');
    }
    
  }
  
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email,password);
  }

}
