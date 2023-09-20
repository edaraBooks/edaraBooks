import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { Mar1Component } from './mar1/mar1.component';
import { Mar2Component } from './mar2/mar2.component';
import { Mar3Component } from './mar3/mar3.component';
import { HomeComponent } from './home/home.component';
import{HttpClient, HttpClientModule}from "@angular/common/http";
import { Platform } from '@ionic/angular';



@NgModule({
  declarations: [AppComponent,
    PdfViewComponent,
    Mar1Component,
    Mar2Component,
    Mar3Component,
  HomeComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,NgxExtendedPdfViewerModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
