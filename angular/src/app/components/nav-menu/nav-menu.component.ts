import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  productsQtd: number = 0;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.$cart.subscribe(item => {
      this.productsQtd = item && item.products ? item.products.reduce(function(acc, obj){ return acc + obj.qtd}, 0) : 0;
    })
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
