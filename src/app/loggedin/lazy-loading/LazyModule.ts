import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';

const routes: Routes = [
    { path: 'load-me', component: LazyLoadingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
   LazyLoadingComponent
  ]
})
export class LazyModule { }