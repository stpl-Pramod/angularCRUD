import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
fetchData:any;
singleData:any;
  
  editForm = new FormGroup({
    createdBy: new FormControl(0),
    modifiedBy: new FormControl(0),
    createdDate: new FormControl("2022-12-14T08:23:43.860Z"),
    modifiedDate: new FormControl("2022-12-14T08:23:43.860Z"),
    isDeleted: new FormControl(true),
    id: new FormControl(0),
    article_Title: new FormControl("test"),
    source: new FormControl(this.postData.source),
    url: new FormControl(this.postData.url),
  })

  constructor(@Inject(MAT_DIALOG_DATA) public postData: any, private service:MediaService, private router:Router ) {
    // this.editForm = new FormGroup({
    //   article_Title: new FormControl(postData.article_Title),
    //   source: new FormControl(postData.source),
    //   url: new FormControl(postData.url)
    // });
   }

  ngOnInit(): void {
    this.service.find().subscribe((r:any)=>{
      this.fetchData = r.responseData.responseData;
      this.singleData = this.fetchData.filter((f:any)=> f.mediaId == this.postData.mediaId);
      this.editForm.patchValue({
        source:this.singleData[0].source,
        url:this.singleData[0].url,
      });
      //console.log(this.editForm.value);
      
    });
  }
  onSubmit(){
    let updataObj = {
      "createdBy": 0,
      "modifiedBy": 0,
      "createdDate": "2022-12-29T03:25:45.198Z",
      "modifiedDate": "2022-12-29T03:25:45.198Z",
      "isDeleted": true,
      "id": this.postData.mediaId,
      "article_Title": "teststring",
      "source": this.editForm.value.source,
      "url": this.editForm.value.url
    }
    // console.log(this.editForm.value);
    this.service.updateList(updataObj).subscribe((res:any)=>{
      if(res.statusCode === "200"){
        this.router.navigateByUrl('media')
      }
    });
   
  }

}
