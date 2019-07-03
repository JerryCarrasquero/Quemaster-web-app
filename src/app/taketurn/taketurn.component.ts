import { Component, OnInit } from '@angular/core';
import { TaketurnService } from '../taketurnservice/taketurn.service';
import {TokenhandlerService}from '../tokenhandler.service';
import { ActivatedRoute, Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-taketurn',
  templateUrl: './taketurn.component.html',
  styleUrls: ['./taketurn.component.css']
})
export class TaketurnComponent implements OnInit {
  
  constructor(private spiner:NgxSpinnerService,private routerh:Router,private router:ActivatedRoute , public TaketurnService:TaketurnService ,public token:TokenhandlerService){}
  private title:String = 'quemaster';
          place=0;
          placet=0;
          name:string;
          id:number;
          channel:number;
          time:string;
          exist:Boolean;
  taketurn(a:string){
    console.log("take turn")
      let data={
        accion:a,
        token:this.token.gettoken(),
        id:this.id,
        idc:this.channel
      };
    this.spiner.show();
    if (a=="yes" || a=="no"){
    this.TaketurnService.dropline(data).subscribe(results =>{
      console.log(results);
      this.spiner.hide();
      this.routerh.navigate(['/home']);
    });
    } else{ 
    this.TaketurnService.upload(data).subscribe(results => {
      this.place=results.Columplace;
      this.placet=results.total;
      this.time=results.EstimatedTime;
      alert("Your Turn is "+this.place)
      this.exist=true;
      this.spiner.hide();
    }
    );
  }
  }
  f2(a:number,b:String){
    this.spiner.show();
    this.TaketurnService.position(a,b).subscribe(results=>{
    this.placet=results.place;
    this.place=results.Columplace;
    this.time=results.EstimatedTime;
    this.exist=results.exist;
    console.log(results);
    this.spiner.hide();
    })
  }
  ngOnInit() {
    this.router.params.subscribe(params =>{
      this.id= params['p2'];
      this.name= params['p1'];
      this.channel=params['p3'];
      this.f2(this.channel,this.token.gettoken());
    }); 
  }

}
