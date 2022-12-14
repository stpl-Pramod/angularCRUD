import { Component, OnInit } from '@angular/core';
import { MediaService } from './media.service';
import {MatDialog} from '@angular/material/dialog';
import { ShowListDialogComponent } from './show-list-dialog/show-list-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

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
  showListDialog(postData:any){
    this.dialog.open(ShowListDialogComponent, {
      width:'500px',
      data: postData
    });
  }
  editListDialog(postData:any){
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width:'500px',
      data: postData
    });
  }
  addDialog(){
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width:'500px'
    });
  }
  deleteItem(id:any){
    let headerOptions = {
      'id': id,
      'modifiedBy': 0
    }
    this.service.deleteItem(headerOptions).subscribe((res:any)=>{
      console.log("deleted");
    })
  }
  
}
