import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishlistPage } from './wishlist.page';

const routes: Routes = [
  {
    path: '',
    component: WishlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishlistPageRoutingModule {}
