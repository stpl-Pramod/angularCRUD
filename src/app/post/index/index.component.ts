import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  indexData: any;
  constructor(private apiService: PostServiceService) { }

  ngOnInit(): void {
    this.getIndexData();
  }
  getIndexData() {
    this.apiService.getIndex().subscribe((res: any) => {
      this.indexData = res.responseData.responseData;
      console.log(this.indexData);
    })
  }
  httpOptions = {
    headers: new HttpHeaders({
      'accept': '*/*',
      'Content-Type': 'application/json',
      
    })
  }
  deleteMedia(e:any){
    console.log(e);
    let deleteObj = {
      "id":e.mediaId,
      "modifiedBy": 0,
    }
   
     this.apiService.delete(deleteObj).subscribe((res:any)=>{
      //  this.indexData = this.indexData.filter((item:any)=>item.id !== deleteObj.id);
      console.log(res);
      
       console.log("delete successfully");
    });

    };

    // this.apiService.delete(e.mediaId).subscribe((res:any)=>{
    //   let index = this.indexData.indexOf(e);
    //   this.indexData.splice(index,1);
    //   console.log("delete successfully");
    // });
  }

