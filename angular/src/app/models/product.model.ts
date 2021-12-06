import { DecimalPipe } from "@angular/common";

export class Product {
  public id: number;
  public name: string;
  public price: DecimalPipe;
  public promotion: string;
  public promotionId: number;
}