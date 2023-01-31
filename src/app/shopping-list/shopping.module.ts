import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingRoutingModule } from './shopping-routing.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  //CommonModule Exports all the basic Angular directives and pipes, such as NgIf , NgForOf , DecimalPipe , and so on.we only have access to what we import.we are importing router module, common module and reactive forms module bcoz we get errors related to router link, ngFor, ngIf and forms. so in order to get access to them we import these modules.
  imports: [RouterModule, FormsModule, ShoppingRoutingModule, SharedModule],
})
export class ShoppingModule {}
