import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../models/data.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = ' https://api.coindesk.com/v1/bpi/currentprice.json'; // Remplace par l'URL du backend

  constructor(private http: HttpClient) {}

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }
}
