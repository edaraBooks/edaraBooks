import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-mar1',
  templateUrl: './mar1.component.html',
  styleUrls: ['./mar1.component.scss'],
})
export class Mar1Component  implements OnInit {

  constructor(private dataService:ServiceService ) { 
    

     }
     onClick(path:string,titlePdf:any,urlPdf:any){
      this.dataService.setSrcPdf(path);
      this.dataService.setTitlePdf(titlePdf);
      this.dataService.setUrlPdf(urlPdf);
     }

    
  
  ngOnInit() {}
  
}
