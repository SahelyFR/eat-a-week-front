import { Injectable } from '@angular/core';
import { Recette } from '../models/recette.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {
  baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient,
              private authService: AuthService){}

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200/',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Authorization': this.authService.getToken()
  });
  
  getAllRecettes(): Observable<Recette[]> {
    console.log(`RecetteList / Token : ${this.authService.getToken()}`);
    return this.http.get<Recette[]>(`${this.baseUrl}/recettes`/*, {
      headers: this.headers
    }*/);
  }

  getRecetteById(recetteId: number): Observable<Recette> {
      return this.http.get<Recette>(`${this.baseUrl}/recette/${recetteId}`/*, {
        headers: this.headers
      }*/); 
  }

  createRecette(formValue: {name: string, link: string, spring: boolean, summer: boolean,
      autumn: boolean, winter: boolean}): Observable<Recette>{
    console.log(`RecetteCreate / Token : ${this.authService.getToken()}`);
    return  this.http.post<Recette>(`${this.baseUrl}/recette`, {
        //headers: this.headers,
        body: formValue
    });   
  }
}