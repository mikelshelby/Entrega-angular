import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CreatorsPipe } from './pipes/creators.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    PaginationComponent,
    CreatorsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    PaginationComponent,
    CreatorsPipe
  ]
})
export class SharedModule { }
