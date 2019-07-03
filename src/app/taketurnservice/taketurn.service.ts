import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaketurnService {
  //url: String = "http://localhost:8080/Sirvientedecolas/rest/rest/";
  url: String = "http://192.168.43.55:8080/Sirvientedecolas/rest/rest/";
  constructor(public http: HttpClient) { }
  checkbillboard(data:String){
    console.log("checkbillboard fired")
    return this.http.get<any>( `${this.url}billboard?token=`+data);
  }
  channelsemp(data:String){
    return this.http.get<any>( `${this.url}employchannel?token=`+data);
  }
  checktoken(data:String){
    return this.http.get<any>( `${this.url}tokentest?token=`+data);
  }
  employeeturn(data:String){
    return this.http.get<any>( `${this.url}chekturn?token=`+data);
  }
  machineviever(data:String){
    return this.http.get<any>(`${this.url}machines?token=`+data);
  }
  dropline(data:any){
    return this.http.post<any>( `${this.url}dropturn`,JSON.stringify(data));
  }
  upload(data:any){
    return this.http.post<any>( `${this.url}taketurn`,JSON.stringify(data));
  }
  position(data:number,data2:String){
    return this.http.get<any>(`${this.url}seeplaces?id=`+data+`&token=`+data2);
  }
  signturn(data:any){
    return this.http.post<any>(`${this.url}singturn`,JSON.stringify(data));
  }
  channels(data:number){
    return this.http.get<any>(`${this.url}channels?id=`+data);
  }
  industries(){
    return this.http.get<any>(`${this.url}industries`);
  }
  firstclient(){
    return this.http.get<any>(`${this.url}firsturn`);
  }
  nexturn(data:any){
    return this.http.post<any>(`${this.url}nexturn`,JSON.stringify(data));
  }
  checkturn(data:number,data2:number){
    return this.http.get<any>(`${this.url}currenturn?id=`+data+`&idc=`+data2);
  }
  endturn(data:any){
    return this.http.post<any>(`${this.url}endturn`,JSON.stringify(data));
  }
  report(data:any){
    return this.http.post<any>(`${this.url}report`,JSON.stringify(data));
  }
}
