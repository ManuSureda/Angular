import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/product-category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categoryList: Array<ProductCategory> = [];
  productList: Array<Product> = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.productService.getAll()
      .then(response => {
        this.productList = response;
      })
      .catch(error => {
        console.log(error);
      })
    for (let product of this.productList) {
      this.categoryService.getById(product.productCategoryId)
        .then(reponse => {
          this.categoryList.push(reponse);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

}
