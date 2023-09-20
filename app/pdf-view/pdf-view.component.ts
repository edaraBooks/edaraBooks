import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss'],
})
export class PdfViewComponent  implements OnInit {
src: string="";
  titlePdf:string="";
  urlPdf:string="";
  numPage:number=1;
  loading: boolean = true;
  
loadingPdf(){
  this.loading=true;
setTimeout(() => {
  this.loading=false;
}, 3000);
}
  constructor(private dataService:ServiceService ) { 
    this.loadingPdf();
    this.src=this.dataService.getSrcPdf();  
    this.titlePdf=this.dataService.getTitlePdf();
   this.urlPdf= this.dataService.getUrlPdf();
  }

  onClick2(urlPdf:any){
    window.open(urlPdf, "_blank");
  }
 NextPage(){
  if(this.numPage<124)
  this.numPage+=1;
 }
 backPage(){
  if(this.numPage>1)
  this.numPage-=1;
 }
 firstPage(){
  this.numPage=1;
 }
 lastPage(){
  this.numPage=124;
 }
  ngOnInit() {
   
  }

}
