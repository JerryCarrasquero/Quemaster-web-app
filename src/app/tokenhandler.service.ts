import { Inject,Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { TaketurnService } from './taketurnservice/taketurn.service';
import { NgxPermissionsService } from 'ngx-permissions';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TokenhandlerService {
  token: String;
  constructor(private router: Router, @Inject(SESSION_STORAGE) private storage: StorageService,private permissionsService: NgxPermissionsService,public TaketurnService:TaketurnService) { 
  }
  settoken(a:String){
    this.storage.set("tokeid", a);
  }
  b:boolean; 
  f1() {
    return new Promise((resolve, reject) => {
    var token = this.gettoken()
      if(token!=""){
        const subscription =  this.TaketurnService.checktoken(token).subscribe(results => {
          if(results.status==202){
            console.log("fired!");
            this.permissionsService.loadPermissions([results.rol]);
            this.b= true;
          }else{
            console.log("fatal error");
           this.b= false;
          }
          resolve();
        },);
      }else{
            console.log("fatal error");
            this.b= false; 
      }
    });
  }
  public checksession(session){
    console.log(session);
    if (session){
      console.log("works 2");
      this.router.navigate(['home']);
    }
  }
  public checkpermission(session){
    if (!session){
    this.gohome();
    }
  }

  public permission(){
    this.f1().then(res => this.checkpermission(this.b))
  }
  public session(){
    this.f1().then(res => this.checksession(this.b))
  }
  public gohome():void{
    this.router.navigate(['']);
  }
  public gettoken ():String{
    this.token = this.storage.get("tokeid");
    return this.token;
  }
  removetoken(){
     this.storage.remove("tokeid");
  }
}
