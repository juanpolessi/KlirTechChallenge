import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',  
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'app';
  products: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts()
    .subscribe(products => this.products = products);
  }

}
