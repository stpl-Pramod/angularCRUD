import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
baseUrl = "https://jsonplaceholder.typicode.com/posts/";
  constructor(private http:HttpClient) { }
getIndex(){
  return this.http.get(this.baseUrl);
}
}
