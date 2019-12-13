import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { My1Component } from './components/app.my1.component';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [
    {path: '', component: My1Component}
 ];
@NgModule({
  declarations: [My1Component],
  imports: [ CommonModule,
    RouterModule.forChild(childRoutes) ],
  exports: [] 
})
export class LazyModule {}