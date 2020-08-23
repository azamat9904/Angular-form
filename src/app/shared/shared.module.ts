import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatPipe } from './concat.pipe';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    ConcatPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ConcatPipe,
    CommonModule,
    RouterModule,
    FilterPipe
  ],
  providers:[
    AuthGuard
  ]
})
export class SharedModule{}
