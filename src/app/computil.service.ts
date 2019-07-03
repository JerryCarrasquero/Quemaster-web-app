import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ComputilService {
  sharingData = { name: " " , id: " "};
  private dataStringSource = new BehaviorSubject<any>("String");
  dataString$ = this.dataStringSource.asObservable();
  constructor() { }
    
  public saveData(value,value2){
    this.sharingData.name = value;
    this.sharingData.id =value2;
    this.dataStringSource.next(this.sharingData);
  }
}
