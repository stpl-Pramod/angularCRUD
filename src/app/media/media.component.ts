import { Component, OnInit } from '@angular/core';
import { MediaService } from './media.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  displayedColumns: string[] = ['srNo', 'mediaId', 'source', 'url', 'action'];

  getData:any;

  constructor(private service:MediaService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData(){
    this.service.getList().subscribe((resp:any)=>{
      this.getData = resp.responseData.responseData;
      console.log(resp);
    })
  }
  showListDialog(){
    console.log("test dialog");
    this.dialog.open(ShowListDialogComponent)
  }
}
@Component({
  selector: 'app-show-list-dialog',
  templateUrl: 'show-list-dialog/show-list-dialog.component.html',
})
export class ShowListDialogComponent { }