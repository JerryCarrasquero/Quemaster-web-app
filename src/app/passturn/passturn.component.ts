import { Component, OnInit } from '@angular/core';
import { TaketurnService } from '../taketurnservice/taketurn.service';
import {TokenhandlerService}from '../tokenhandler.service';
import { ActivatedRoute,Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-passturn',
  templateUrl: './passturn.component.html',
  styleUrls: ['./passturn.component.css']
})
export class PassturnComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private routerh:Router,private router:ActivatedRoute,public TaketurnService:TaketurnService,public token:TokenhandlerService ) { }
  nameuser:string="No client";
  user:string="No client";
  placec:number=0;
  place:number=0;
  name:string;
  channelid:number;
  turnid:number;
  queid:number;
  tokenuser:String=this.token.gettoken();
  nexturn(a){
    this.spinner.show();
    console.log("next turn")
    let data ={
      id:this.channelid,
      turnid:this.turnid,
      queid:this.queid,
      mode:a
    }
    this.TaketurnService.nexturn(data).subscribe(results => {
      this.spinner.hide();
      if (results.code=="500"){
        alert("Erro interno del servidor. codigo: 500");
      }else{  
        this.place=results.place;
        this.user=results.user;
        this.nameuser=results.name;
        this.placec=results.currentplace;
        this.queid=results.queid;
      }
    });
  }
  endturn(){
    let data={
      turn:this.turnid,
    }
    this.spinner.show();
    this.TaketurnService.endturn(data).subscribe(results=>{
      this.spinner.hide();
      if (results.code==500){
        alert(results.error);
      }else{
        this.routerh.navigate(['/home']);
      }
    });
  }
  currenturn(id:number,idt:number){
    this.spinner.show();
    this.TaketurnService.checkturn(id,idt).subscribe(results => {
      console.log(results);
      this.spinner.hide();
      this.place=results.place;
      this.user=results.user;
      this.nameuser=results.name;
      this.placec=results.currentplace;
      this.queid=results.queid;
    })
  }
  ngOnInit() {
    this.spinner.show();
    this.router.params.subscribe(params =>{
      this.spinner.hide();
      this.channelid= params['channel'];
      this.name= params['name'];
      this.turnid=params['tid'];
      console.log("fired2");
      this.currenturn(this.channelid,this.turnid);
    });
    //
  }

}
