import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  getBeers(): Observable<any>{
    return this.http.get<any>('/products');
  }

  searchBeers(product_id: string): Observable<any>{
    return this.http.get<any>("search?name="+product_id);
  }

  setfav(product_id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var to_send = {
      product_id: product_id
    };
    return this.http.post<any>("setfavourite", to_send, httpOptions);
  }

  getfav(): Observable<any>{
    return this.http.get<any>("/favourites");
  }

}
