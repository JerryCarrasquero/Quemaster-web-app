import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  //url: String = "http://localhost:8080/Sirvientedecolas/rest/rest/";
  url: String = "http://192.168.43.55:8080/Sirvientedecolas/rest/rest/";
  constructor(public http: HttpClient) { }

  login(data){
    return this.http.post<any>( `${this.url}login`,JSON.stringify(data),{withCredentials: true});
  }
  register(data){
    return this.http.post<any>( `${this.url}register`,JSON.stringify(data));
  }
}
