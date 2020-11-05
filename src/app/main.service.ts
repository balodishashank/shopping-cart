import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyMainService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('../assets/data/products.json');
  }

}