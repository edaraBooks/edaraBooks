import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-mar3',
  templateUrl: './mar3.component.html',
  styleUrls: ['./mar3.component.scss'],
})
export class Mar3Component  implements OnInit {
  constructor(private dataService:ServiceService ) {   
   
  }
  onClick(path:string,titlePdf:any,urlPdf:any){
    this.dataService.setSrcPdf(path);
    this.dataService.setTitlePdf(titlePdf);
    this.dataService.setUrlPdf(urlPdf);
   }
  ngOnInit() {}

}
