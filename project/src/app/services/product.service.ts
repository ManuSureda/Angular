import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL = "https://utn-avanzada2-tp-final.herokuapp.com/"
  constructor(private http: HttpClient) { }
  productList: Array<Product> = [];
 
  getAll(): Promise<any>{
    
    return this.http.get(this.apiURL+"api/Product")
      .toPromise();
  }
}
