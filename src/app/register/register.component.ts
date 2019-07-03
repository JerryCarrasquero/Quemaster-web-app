import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Validators, FormBuilder, FormGroup} from '@angular/forms'
import { LoginserviceService } from '../loginservice/loginservice.service';
import {Utilities} from '../utilities';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private RegisterForm: FormGroup;
  public error:String;
  constructor(private router: Router,private fb: FormBuilder,public LoginserviceService:LoginserviceService  ) {
    this.RegisterForm =this.fb.group({
        username: ['',Validators.compose([Validators.pattern('^[A-Za-z0-9_-]{4,15}$'), Validators.required])],
        password: ['',Validators.compose([Validators.pattern('^[A-Za-z0-9]{8,15}$'), Validators.required])],
        repassword: ['',Validators.compose([Validators.pattern('^[A-Za-z0-9]{8,15}$'), Validators.required])],
        email: ['',Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
        name: ['',Validators.required]
      }, {
      validator: Utilities.MatchPassword // your validation method
      });
    }
    register(){
      let data = this.RegisterForm.value;
      this.LoginserviceService.register(data).subscribe(results => {
        console.log(results);
        if(results.code==403){
          this.error=results.error;
        }else{
          this.router.navigate(['']);
        }
      });
    }
    logins(){
      this.router.navigate(['']);
    }

  ngOnInit() {

  }

}
