import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
baseUrl = "http://demowhizhackwebapi.mahamining.com/whizhack_cms/media/GetAllByPagination";
createUrl = "http://demowhizhackwebapi.mahamining.com/whizhack_cms/media/Register";
updateUrl = "http://demowhizhackwebapi.mahamining.com/whizhack_cms/media/Update";
//deleteUrl = "http://whizhackwebapi.mahamining.com/whizhack_cms/media/Delete";
deleteUrl = "http://demowhizhackwebapi.mahamining.com/whizhack_cms/media/Delete";

  constructor(private http:HttpClient) { }

  getIndex(){
    return this.http.get(this.baseUrl);
  }
  createMedia(post:any){
    return this.http.post(this.createUrl, post);
  }
  find(){
    return this.http.get(this.baseUrl);
  }
  update(upData:any){
    return this.http.put(this.updateUrl, upData);
  }

  delete(med:any){
    const options = {
      header : new HttpHeaders({"Content Type" : "Application/json"}),
      body : med,
    }
    return this.http.delete(this.deleteUrl, options);

  }
}
