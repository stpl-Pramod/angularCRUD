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
  find(id:any){
    return this.http.get(this.updateUrl+'/'+id);
  }
  update(id:any, body:any){
    return this.http.put(this.updateUrl+'/'+id, body);
  }
  delete(med:any){
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',  }),
      body: med,
    };
    return   this.http.delete(this.deleteUrl, options);
  }
}
