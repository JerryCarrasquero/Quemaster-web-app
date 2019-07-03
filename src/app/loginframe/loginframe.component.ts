import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Validators, FormBuilder, FormGroup} from '@angular/forms'
import { LoginserviceService } from '../loginservice/loginservice.service';
import { AppComponent } from '../app.component';
import {TokenhandlerService}from '../tokenhandler.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loginframe',
  templateUrl: './loginframe.component.html',
  styleUrls: ['./loginframe.component.css']
})
export class LoginframeComponent implements OnInit {
  private loginForm: FormGroup;
  public error:String;
  constructor(private spinner: NgxSpinnerService,private tokenh:TokenhandlerService, private router: Router,private fb: FormBuilder,public LoginserviceService:LoginserviceService  ) {
    this.loginForm =this.fb.group({
        username: ['',Validators.required],
        password: ['',Validators.required]
      });
   }
    register(){
      this.router.navigate(['register']);
    }
    enterSite(){
      this.spinner.show();
       let data = this.loginForm.value;
       this.LoginserviceService.login(data).subscribe(results => {
        this.spinner.hide(); 
        console.log(results);
         if (results.status==202){
          this.tokenh.settoken(results.token)
          this.router.navigate(['home']);
        }else {
          this.error=results.response;
        }
       });
     }
    ngOnInit() {
      this.tokenh.session();
    }
}
