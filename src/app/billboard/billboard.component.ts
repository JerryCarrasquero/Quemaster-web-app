import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import {interval} from 'rxjs';
import { TaketurnService } from '../taketurnservice/taketurn.service';
import { TokenhandlerService } from '../tokenhandler.service';
@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css']
})
export class BillboardComponent implements OnInit {
  private informes:Array<any>;
  
  constructor(private token:TokenhandlerService,public TaketurnService:TaketurnService) {
    this.informes=[];
   }
  doPoll(){
    //this.informes=[{channelname:"Retiro",place:"1",computer:"Caja 1"},{channelname:"Retiro",place:"2",computer:"Caja 2"},{channelname:"Retiro",place:"3",computer:"Caja 3"},{channelname:"Deposito",place:"1000",computer:"Caja 4"},{channelname:"soporte",place:"2000",computer:"Caja 5"},{channelname:"soporte",place:"2001",computer:"Caja 6"}]
     console.log("xansaiood request");
      interval(5000).pipe(
        switchMap(() => this.TaketurnService.checkbillboard(this.token.gettoken()))
    ).subscribe(data => {
      this.informes=[];
      for (let i=0; i<data.length;i++){
        this.informes.push(data[i]);
      }
      }
    );
  }

  ngOnInit() {
    this.doPoll();
  }

}
