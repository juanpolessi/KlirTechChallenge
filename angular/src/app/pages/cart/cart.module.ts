import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartRoutingModule } from './cart.routing.module';
import { CommonModule } from '@angular/common';
import { AngularCounterModule } from 'angular-input-counter';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { CartComponent } from './cart.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [ 
    CartRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AngularCounterModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [CartComponent]
})
export class CartModule { }
