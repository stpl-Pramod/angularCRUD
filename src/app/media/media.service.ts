import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  //baseUrl = 'http://whizhackwebapi.mahamining.com/whizhack_cms/media/GetAllByPagination';
  //deleteUrl = "http://whizhackwebapi.mahamining.com/whizhack_cms/media/Delete";

  baseUrl = "http://demowhizhackwebapi.mahamining.com/whizhack_cms/media/GetAllByPagination";
  createUrl = "http://demowhizhackwebapi.mahamining.com/whizhack_cms/media/Register";
  updateUrl = "http://demowhizhackwebapi.mahamining.com/whizhack_cms/media/Update";
  deleteUrl = "http://demowhizhackwebapi.mahamining.com/whizhack_cms/media/Delete";
  constructor(public http:HttpClient) { }

  getList(){
   return this.http.get(this.baseUrl);
  }
  find(){
   return this.http.get(this.baseUrl);
  }
  updateList(upData:any){
    return this.http.put(this.updateUrl, upData);
  }

}
