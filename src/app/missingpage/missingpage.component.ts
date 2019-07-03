import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-missingpage',
  templateUrl: './missingpage.component.html',
  styleUrls: ['./missingpage.component.css']
})
export class MissingpageComponent implements OnInit {

  constructor( private router: Router) { }
  gobackhome(){
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}
