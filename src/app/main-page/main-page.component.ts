import { Component, OnInit } from '@angular/core';
import {TokenhandlerService}from '../tokenhandler.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private tokenh:TokenhandlerService) { }
  logout(){
    this.tokenh.removetoken();
    this.tokenh.gohome();
  }
  ngOnInit() {
    this.tokenh.permission();
  }

}
