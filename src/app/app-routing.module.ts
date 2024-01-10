import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/allcomponents/all-products/all-products.component';
import { ProductDetailsComponent } from './products/allcomponents/product-details/product-details.component';
import { CartsComponent } from './carts/allcomponents/carts/carts.component';

const routes: Routes = [
  {
    path: 'products',
    component: AllProductsComponent,
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: CartsComponent,
  },
  { path: '**', redirectTo: 'cart', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
