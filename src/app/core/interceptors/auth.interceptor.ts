import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private authService: AuthService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = new HttpHeaders()
          .append('Authorization', `Bearer ${this.authService.getToken()}`)
          .append('Content-Type', 'application/json')
          .append('Access-Control-Allow-Origin', 'http://localhost:4200/')
          .append('Access-Control-Allow-Headers', 'Content-Type')
          .append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
        if( req.url.includes('/login')){
            headers = headers.append('username', btoa(this.authService.getCredentials().username))
            headers = headers.append('password', btoa(this.authService.getCredentials().password)); 
        }
        console.log(headers);  
        const modifiedReq = req.clone({ headers });
        return next.handle(modifiedReq);
    }

}