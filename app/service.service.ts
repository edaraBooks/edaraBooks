import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlPdf:string="";
   srcPdf:string="";
   titlePdf:string="";
  constructor() { }

  setSrcPdf( pathPdf:string){
this.srcPdf=pathPdf;

  }
getSrcPdf(){
  return this.srcPdf;
  
} 
setTitlePdf( titlePdf:string){
  this.titlePdf=titlePdf;
  
    }
  getTitlePdf(){
    return this.titlePdf;
    
  } 
  setUrlPdf( urlPdf:string){
    this.urlPdf=urlPdf;
    
      }
    getUrlPdf(){
      return this.urlPdf;
      
    } 
}
