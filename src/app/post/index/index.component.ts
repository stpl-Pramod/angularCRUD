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
  deleteMedia(e:any){
    let deleteObj = {
      "id": e.mediaId,
      "modifiedBy": 0
    }
    this.apiService.delete(deleteObj).subscribe((res:any)=>{
      console.log(res);
      console.log("delete2 successfully");
    })
  }
  
}

