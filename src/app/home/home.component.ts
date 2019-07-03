import { Component, OnInit } from '@angular/core';
import { TaketurnService } from '../taketurnservice/taketurn.service';
import {Router,ActivatedRoute} from "@angular/router";
import {ComputilService} from '../computil.service';
import { TokenhandlerService } from '../tokenhandler.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private places: Array<any>;
  machines: Array<any>;
  name:string;
  location:string;
  error:string;
  tokenuser:String;
  channelid:number;
  tablename:string;
  private channelname:string;
  private selectedOption:string;
  private mdlSampleIsOpen : boolean = false;
  constructor(private spinner: NgxSpinnerService,private token:TokenhandlerService ,private turn:TaketurnService,private router:Router,private arouter:ActivatedRoute,private uti:ComputilService) {
    this.places=[];
    this.machines=[];
    this.tokenuser=token.gettoken();
   }
  gotobooth(a:string,b:number,c){
    this.router.navigate(['/home/taketurn',a,b,c]);
  }
  pushresults(results:any):any{
    for (let i=0; i<results.length;i++){
      this.places.push(results[i]);
    }
  }
  gonextturn(turnid:number,name:string,channel:number){
    this.router.navigate(['/home/passturn',turnid,name,channel]);
  }
  ticketboot(names:string,id:number,ex:boolean):void{
    this.spinner.show();
    this.turn.channels(id).subscribe(results=>{
      this.name=names;
      this.spinner.hide();
      if(ex){ 
      this.tablename="Canal";
      this.places=[];  
      this.pushresults(results);
      }else{
        this.gotobooth(names,results[0].id,results[0].channelid);
      }
    })
  }
  ticketboot2(name:string,id:number,channelid:number):void{
    this.gotobooth(this.name,id,channelid);
  }
  ticketboot3():void{
    let machineid=this.selectedOption;
    this.spinner.show();
    console.log(machineid);
    let data= {
      chid:this.channelid,
      token:this.tokenuser,
      cid:machineid
    }
    console.log(data);
    let turnid:number;
    this.turn.signturn(data).subscribe(results=>{
      this.spinner.hide();
      if(results.code==200){
        turnid=results.turnid;
        this.gonextturn(turnid,this.channelname,this.channelid)
      }else{
        this.error=results.error;
      }
    })
  }
  machinerequest(name:string,channelid:number){
    this.channelname=name;
    this.channelid=channelid;
    this.machines=[];
    this.spinner.show();
    this.turn.machineviever(this.tokenuser).subscribe(results=>{
      for (let i=0; i<results.length;i++){
        this.spinner.hide();
        this.machines.push(results[i]);
        this.openmodal(true);
      }
    })
  }
  openmodal(open:boolean){
    this.mdlSampleIsOpen=open;
  }
  ngOnInit() {
    this.spinner.show();
    this.arouter.params.subscribe(params =>{
      this.location= params['p1'];
      this.places=[];
      if (this.location=="index"){
        this.turn.industries().subscribe(result=>{
          this.spinner.hide();
          this.pushresults(result);
          this.tablename="Industria";
        })
      } else if( this.location=="nexturn"){
        this.turn.employeeturn(this.tokenuser).subscribe(results=>{
          this.spinner.hide();  
          this.tablename="Canal";
          if (results.code==200){
            console.log(results);
            this.gonextturn(results.turn,results.name,results.channel);
          }else if (results.code==404){
            this.turn.channelsemp(this.tokenuser).subscribe(result=>{
              this.pushresults(result);
            });
          }else{
            this.error=results.error;
          }
        });
      }else {
        this.router.navigate(['/home/404']);
      }
    }); 
    
  }

}
