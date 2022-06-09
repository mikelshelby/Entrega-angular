import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './pages/catalog-list/catalog-list.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CatalogComponent,
    CatalogListComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule
  ]
})
export class CatalogModule { }
