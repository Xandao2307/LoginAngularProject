import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient)
  { 
  }

  login(email:string, password: string){
    return this.httpClient.get(`https://localhost:7044/api/User?email=${email}&password=${email}`).pipe(tap((value)=>{
      console.log(value);
      }))    
  }
}
