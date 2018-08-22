import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import { Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class HttpServiceService {
    headers: Headers;
    options: RequestOptions;
  public films={};
  private Success:Subject <any>=new Subject<any>();
  constructor(public http: Http) { 
     this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.headers.set('api_key', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsicm9sZSI6IkVtcGxveWVlIiwidXNlcklkIjoyLCJpc0RldGFpbHMiOnRydWUsInVzZXJOYW1lIjoiTXl0aHJpIn0sImlhdCI6MTUxODYxNzEyOCwiZXhwIjoxNTE4NzAzNTI4fQ.F5OXv9gcRh5TvgkvWKF-vzAAl9mJ2aRyjGaSDGGfdyA');
        this.headers.set('Access-Control-Expose-Headers', 'Content-Type, Accept, Access-Control-Allow-Origin, ' +
            'Access-Control-Allow-Methods, Access-Control-Allow-Headers');
        this.headers.set('Access-Control-Allow-Origin' , '*');
        this.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
        this.headers.set('Access-Control-Allow-Headers', 'origin, content-type, accept');
        this.headers.append('Access-Control-Allow-Credentials',  'true');
        this.headers.append('Access-Control-Max-Age' , '86400');
  }
  getData(){
    return this.http.get("../assets/asset.json").map((response)=>{
      return response.json()
    });
  }
   filmList(){
     this.films=[{director:'Trivikram',movieName:'Attarintikidaredi'},
     {director:'Trivikram',movieName:'Attarintikidaredi'},
     {director:'Trivikram',movieName:'Attarintikidaredi'}]
     return this.films;
   }
   getFilemListfromApi(){
     let body = {"fileId": "276336931737","fileName": "243816_00731518426543.jpg"};
      this.options = new RequestOptions({ headers: this.headers });
      return this.http.post('http://localhost:1337/v1/hr/box/getFile',body,this.options).map((res=>{
        var result=JSON.parse(res['_body']);
        return result['data'];
      }));
   }
   getFilmListfromApiUsingPromises(){
      return this.http.get('http://www.snagfilms.com/apis/films.json?limit=10').map((res=>{
        return res;
      })).toPromise();
   }
   sendData(name){
      this.Success.next(name);
   }
   readData():Observable<any>{
     return this.Success.asObservable();
   }
}
