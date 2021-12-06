import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cart, ProductsCart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',  
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = null;
  products: ProductsCart[] = null;
  displayedColumns: string[] = ['id', 'name', 'qtd', 'price', 'total', 'promotion'];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.$cart.subscribe(item => {
      this.cart = item;
      this.products = this.cart.products;
    })
  }

}
