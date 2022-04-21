import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = '';
  private authenticated: boolean = false;
  private baseUrl: string = 'http://localhost:8080';
  private credentials!: User;

  constructor(private http: HttpClient) {
}
  
  getToken(): string {
    return this.token;
  }

  setToken(newToken: string): void {
    this.token = newToken;
  }

  getCredentials(): User {
    return this.credentials;
  }

  setCredentials(credentials: User){
    this.credentials = credentials;
  }

  authenticate(credentials: User, callback: any) {
    
    this.setCredentials(credentials);
    this.token = btoa('EatAWeekBack');
    
    this.http.get(`${this.baseUrl}/login`, {
        observe: 'response',
    }).subscribe(response => {
      var authToken = response.headers.get('Authorization');
      if (authToken !== null) {
            this.authenticated = true;
            this.setToken(authToken);
        } else {
            this.authenticated = false;
        }
        return callback && callback();
    });
  }

  isAuthenticated(){
    return this.authenticated;
  }

  logout(){
    this.setToken('');
    this.authenticated = false;
  }
}
