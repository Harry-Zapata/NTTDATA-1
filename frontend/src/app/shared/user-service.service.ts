import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) {}
  url = "http://127.0.0.1:8000/api/users"
  getUser(){
    return this.http.get(this.url)
  }


}
