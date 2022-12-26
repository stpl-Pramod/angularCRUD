import { Component, OnInit } from '@angular/core';
import { MediaService } from './media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  displayedColumns: string[] = ['srNo', 'mediaId', 'source', 'url', 'action'];

  getData:any;

  constructor(private service:MediaService) { }

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData(){
    this.service.getList().subscribe((resp:any)=>{
      this.getData = resp.responseData.responseData;
      console.log(resp);
    })
  }
}
