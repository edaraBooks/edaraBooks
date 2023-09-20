import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { Mar1Component } from './mar1/mar1.component';
import { Mar2Component } from './mar2/mar2.component';
import { Mar3Component } from './mar3/mar3.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'mar1',
    component:Mar1Component,
    pathMatch:'full'
  },
  {
    path:'mar2',
    component:Mar2Component,
    pathMatch:'full'
  },
  {
    path:'mar3',
    component:Mar3Component,
    pathMatch:'full'
  },
  {
    path:'pdfView',
    component:PdfViewComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
