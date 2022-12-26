import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  baseUrl = 'http://whizhackwebapi.mahamining.com/whizhack_cms/media/GetAllByPagination';

  constructor(public http:HttpClient) { }

  getList(){
   return this.http.get(this.baseUrl);
  }

}
