import { DecimalPipe } from "@angular/common";
import { Product } from "./product.model";

export class ProductsCart {
  public idProduct: number;
  public name: string;
  public price: number;
  public total:number = 0;
  public promotion: string;
  public promotionId: number;
  public qtd: number;
}

export class Cart {
  products: ProductsCart[];
  totalValue: number;
}