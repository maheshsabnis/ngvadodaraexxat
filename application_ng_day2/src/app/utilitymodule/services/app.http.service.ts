import { Injectable } from '@angular/core';

// HttpClient: Used for performing external Http Calls
// methods : get<T>()/post<T>()/put<T>()/delete<T>()/ merge<T>()
// all method returns Observable from rxjs
// T is the type for expected response from server
// T -> number, string, object, BLOB, ArrayBuffer
// HttpHeaders class is used for defining Header information
// for Post and Put requests
// the NgModule that registers service with HttpClient must
// import HttpClientModule from @angular/common/http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {University} from './../../models/app.student.model';
@Injectable()
export class HttpService {
   private url: string;
   // inject the HttpClient class in the service to access all its methods
   // instance of HttpClient will be provided by HttpClientModule
   constructor(private http: HttpClient) {
     this.url = 'http://localhost:30285/api/University';
   }
   getData(): Observable<University[]> {
     let resp: Observable<University[]> = null;
     resp = this.http.get<University[]>(this.url);
     return resp;
   }

   postData(u: University): Observable<University> {
    let resp: Observable<University> = null;
    const options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    resp = this.http.post<University>(this.url, u, options);
    return resp;
  }

  putData(u: University): Observable<University> {
    let resp: Observable<University> = null;
    const options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    resp = this.http.put<University>(`${this.url}/${u.UniversityRowId}`, u, options);
    return resp;
  }

  deleteData(u: University): Observable<boolean> {
    let resp: Observable<boolean> = null;
    resp = this.http.delete<boolean>(`${this.url}/${u.UniversityRowId}`);
    return resp;
  }
}
