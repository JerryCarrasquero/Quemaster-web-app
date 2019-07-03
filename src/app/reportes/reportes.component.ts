import { Component, OnInit } from '@angular/core';
import {TokenhandlerService}from '../tokenhandler.service';
import { TaketurnService } from '../taketurnservice/taketurn.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor(private spinner:NgxSpinnerService,public TaketurnService:TaketurnService,public token:TokenhandlerService) {
  }
  usertoken:String=this.token.gettoken(); 
  code:number;
  fastest:string;
  fastbox:string;
  fastime:number;
  slowest:string;
  slowbox:string;
  slowtime:number;
  abandono:number;
  atendido:number;
  sintiempo:number;
  skipped:number;
  clientes:number;
  tiempoensistema:number;
  message:string;
  total:number;
  pickdates(){
   let data={
    date1:this.bsRangeValue[0].toDateString(),
    date2:this.bsRangeValue[1].toDateString(),
    token:this.usertoken
   }
   this.spinner.show();
   this.TaketurnService.report(data).subscribe(results=>{
    this.code=results.code;
    if (this.code==206||this.code==200){
    this.spinner.hide();
      this.fastest=results.fastest;
      this.fastbox=results.fastbox;
      this.fastime=results.fastime;
      this.slowest=results.slowest;
      this.slowbox=results.slowbox;
      this.slowtime=results.slowtime;
      this.abandono=results.abandonado;
      this.atendido=results.atendido;
      this.sintiempo=results.sintiempo;
      this.skipped=results.skipped;
      this.total=results.total;
      console.log(results);
      if (this.code==200){
        console.log("fired2");
        this.clientes =Math.round(results.clientess * 100) / 100;
        this.tiempoensistema =Math.round(results.tiemposistema* 100) / 100;
      }
    } else{
    this.message=results.message;
  }

   })
  }

  ngOnInit() {
    
  }

}
