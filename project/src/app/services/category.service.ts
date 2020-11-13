import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductCategory } from '../models/product-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiURL = "https://utn-avanzada2-tp-final.herokuapp.com/"
  
  constructor(private http: HttpClient) { }
  categoryList: Array<ProductCategory> = [];

  getAll(): Promise<any>{
    return this.http.get(this.apiURL+"api/ProductCategory")
      .toPromise();
  }

  getById(productCategoryId: number): Promise<any> {
    console.log(this.apiURL+productCategoryId);
    return this.http.get(this.apiURL+"api/ProductCategoty/"+productCategoryId)
      .toPromise();
  }
}
