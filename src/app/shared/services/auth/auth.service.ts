import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environments } from 'app/shared/constansts/environments.constanst';
import { TokenStorageService } from 'app/shared/services/auth/token-storage.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenStorageService:TokenStorageService,
    private router:Router
  ) {}

  public login(username,password){
    return this.http.post(Environments.ENDPOINT+`/token`, 
    `client_id=macheteapp&grant_type=password&password=`+password+`&userName=`+username,
    {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'),
    }).subscribe(
      (data => {
       console.log(data);
       localStorage.setItem('session', JSON.stringify(data));
       this.router.navigate(['']);
      }),
      (error: any) =>{
        console.log(error);
      }
    );
  }

   public logout(){
     this.tokenStorageService.deleteToken();
     this.router.navigate(['/login']);

    }

  
}