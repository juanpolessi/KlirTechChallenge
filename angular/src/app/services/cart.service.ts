import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Cart, ProductsCart } from "../models/cart.model";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  localStorageKey: string = "@KlirCart";
  cart: Cart = null;
  private cartUpdate = new BehaviorSubject<Cart>(this.cart);
  $cart = this.cartUpdate.asObservable();

  constructor(private http: HttpClient) { }

  private getCart() {
    this.cart = JSON.parse(localStorage.getItem(this.localStorageKey))
    return this.cart ? this.cart : [];
  }

  setProduct(product: Product) {
    this.getCart();

    if (this.cart) {
      let item = this.cart.products.filter((p) => p.idProduct === product.id)[0]

      if (item) {
        item.qtd++;
        item.total = this.calcValueTotal(item);
        this.cart.products = this.cart.products.filter((p) => p.idProduct !== product.id)
        this.cart.products.push(item);
      }
      else {
        if (!this.cart.products || this.cart.products.length === 0)
          this.cart.products = new Array<ProductsCart>();

        let prod = new ProductsCart();
        prod.idProduct = product.id;
        prod.name = product.name;
        prod.price = product.price;
        prod.total = product.price;
        prod.promotion = product.promotion;
        prod.promotionId = product.promotionId;
        prod.qtd = 1;
        this.cart.products.push(prod);
      }
    }
    else {
      let prod = new ProductsCart();
      prod.idProduct = product.id;
      prod.name = product.name;
      prod.price = product.price;
      prod.total = product.price;
      prod.promotion = product.promotion;
      prod.promotionId = product.promotionId;
      prod.qtd = 1;
      this.cart = new Cart();
      this.cart.products = new Array<ProductsCart>();
      this.cart.products.push(prod);
    }

    this.cart.totalValue = this.cart && this.cart.products ? this.cart.products.reduce(function(acc, obj){ return acc + obj.total}, 0) : 0;
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cart))
    this.cartUpdate.next(this.cart);
  }

  removeProduct(product: Product) {
    this.getCart();

    let item = this.cart.products.filter((p) => p.idProduct === product.id)[0]

    if (item) {
      item.qtd--;
      item.total = this.calcValueTotal(item);
      if (item.qtd > 0) {
        this.cart.products = this.cart.products.filter((p) => p.idProduct !== product.id)
        this.cart.products.push(item);
      }
      else {
        this.cart.products = this.cart.products.filter((p) => p.idProduct !== product.id)
      }

      this.cart.totalValue = this.cart && this.cart.products ? this.cart.products.reduce(function(acc, obj){ return acc + obj.total}, 0) : 0;
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.cart))
      this.cartUpdate.next(this.cart);
    }
  }

  calcValueTotal(item: ProductsCart){
    if(item.promotionId != 0){
      if(item.promotionId === 1){
        let valuePromotion = 0;
        let valueTotal = 0;
        for(let i = 1; i <= item.qtd; i++){
          if(i % 2 === 0){
            valuePromotion = (i / 2) * item.price;
            valueTotal = 0;
          }
          else {
            valueTotal += item.price;
          }
        }

        return  valuePromotion + valueTotal;
      }
      else if(item.promotionId === 2){
        let valuePromotion = 0;
        let valueTotal = 0;
        for(let i = 1; i <= item.qtd; i++){
          if(i % 3 === 0){
            valuePromotion = (i / 3) * 10;
            valueTotal = 0;
          }
          else {
            valueTotal += item.price;
          }
        }

        return  valuePromotion + valueTotal;
      }
    }
    else {
      return item.price * item.qtd;
    }
  }

  resetCart(){
    this.cart = null;
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cart))
    this.cartUpdate.next(this.cart);
  }

}