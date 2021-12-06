import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductComponent } from 'src/app/components/product/product.component';
import { CommonModule } from '@angular/common';
import { AngularCounterModule } from 'angular-input-counter';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [ 
    CommonModule,
    HttpClientModule,
    FormsModule,
    AngularCounterModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [ProductsComponent]
})
export class ProductsModule { }
