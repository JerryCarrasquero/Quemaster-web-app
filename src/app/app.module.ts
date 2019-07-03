//import modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule  } from 'ngx-permissions';
import { NgTempusdominusBootstrapModule } from 'ngx-tempusdominus-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

//component declared
import { TaketurnComponent } from './taketurn/taketurn.component';
import { PassturnComponent } from './passturn/passturn.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginframeComponent } from './loginframe/loginframe.component';
import { StorageServiceModule } from 'angular-webstorage-service';
//Services
import { TaketurnService } from './taketurnservice/taketurn.service';
import { LoginserviceService } from './loginservice/loginservice.service';
import { TokenhandlerService }from './tokenhandler.service';
import { MissingpageComponent } from './missingpage/missingpage.component';
import { HomeComponent } from './home/home.component';
import { BillboardComponent }from './billboard/billboard.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const appRoutes: Routes = [
  { path: '', component:LoginComponent,
    children:[
      { path: '', component:LoginframeComponent },
      { path: 'register', component:RegisterComponent }
     ]
   },
  { path: 'home', component:MainPageComponent,
   children:[
     { path: '', redirectTo: 'mainpage/index', pathMatch: 'full' },
     { path: 'mainpage/:p1', component:HomeComponent },
     { path: 'taketurn/:p1/:p2/:p3', component:TaketurnComponent },
     { path: 'passturn/:tid/:name/:channel', component:PassturnComponent },
     { path: 'billboard',component:BillboardComponent},
     { path: 'reportes',component:ReportesComponent}
    ]
  },
  { path: '**',  component: MissingpageComponent },
  ];


@NgModule({
  declarations: [
    AppComponent,
    TaketurnComponent,
    PassturnComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MainPageComponent,
    LoginframeComponent,
    MissingpageComponent,
    HomeComponent,
    BillboardComponent,
    ReportesComponent
  ],
  imports: [
    NgxPermissionsModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    NgTempusdominusBootstrapModule,
    StorageServiceModule,
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(
     appRoutes,
     {useHash: true} // <-- debugging purposes only
   )
  ],
  providers: [
    TaketurnService,
    LoginserviceService,
    TokenhandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
