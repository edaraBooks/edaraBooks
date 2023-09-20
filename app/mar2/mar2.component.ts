import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-mar2',
  templateUrl: './mar2.component.html',
  styleUrls: ['./mar2.component.scss'],
})
export class Mar2Component  implements OnInit {

  constructor(private dataService:ServiceService ) {   
   
  }
  onClick(path:string,titlePdf:any,urlPdf:any){
    this.dataService.setSrcPdf(path);
    this.dataService.setTitlePdf(titlePdf);
    this.dataService.setUrlPdf(urlPdf);
   }
  ngOnInit() {}

}
