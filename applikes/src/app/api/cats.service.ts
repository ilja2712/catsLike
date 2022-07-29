import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cats } from '../cats/cats';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(
    private http: HttpClient) { }

  private catsUrl = 'api/cats';
  
  getCats(): Observable<Cats[]> {
    return this.http.get<Cats[]>(this.catsUrl)
  }
}
