import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
baseUrl = "http://whizhackwebapi.mahamining.com/whizhack_cms/media/GetAllByPagination";
createUrl = "http://whizhackwebapi.mahamining.com/whizhack_cms/media/Register";
updateUrl = "http://whizhackwebapi.mahamining.com/whizhack_cms/media/Update";

  constructor(private http:HttpClient) { }
  getIndex(){
    return this.http.get(this.baseUrl);
  }
  createMedia(post:any){
    return this.http.post(this.createUrl, post);
  }
  find(id:any){
    return this.http.get(this.updateUrl+'/'+id );
  }
  update(id:any, body:any){
    return this.http.put(this.updateUrl+'/'+id, body);
  }
}
