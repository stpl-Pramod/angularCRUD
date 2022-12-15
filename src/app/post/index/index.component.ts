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

  deleteMedia(id:any){
console.log(id);
    this.apiService.delete(id.mediaId).subscribe((res:any)=>{
      this.indexData = res.filter((item:any)=> item.id !== id);
      console.log("delete successfully");
    })
  }
}
