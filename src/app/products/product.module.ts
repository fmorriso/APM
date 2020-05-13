// Product Feature Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { SharedModule } from '../shared/shared.module';
//
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
})
export class ProductModule {}
