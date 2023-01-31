import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';

const routes: Routes = [{ path: '', component: ShoppingListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)], //we are using forChild bcoz we are creating a feature module(sub module)
  exports: [RouterModule],
})
export class ShoppingRoutingModule {}
