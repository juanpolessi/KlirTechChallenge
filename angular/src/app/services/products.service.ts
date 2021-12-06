import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { take } from "rxjs/operators"
import { environment } from "src/environments/environment";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api: string;

  constructor(private http: HttpClient){
    this.api =  `${environment.apiUrl}/products`;
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}`).pipe(take(1));
  }

}