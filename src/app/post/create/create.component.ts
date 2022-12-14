import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  mediaForm = new FormGroup({
    createdBy: new FormControl(0),
    modifiedBy: new FormControl(0),
    createdDate: new FormControl("2022-12-14T08:23:43.860Z"),
    modifiedDate: new FormControl("2022-12-14T08:23:43.860Z"),
    isDeleted: new FormControl(true),
    id: new FormControl(0),
    article_Title: new FormControl(),
    source: new FormControl(),
    url: new FormControl(),
  })
  constructor(private service:PostServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.mediaForm.value);
    this.service.createMedia(this.mediaForm.value).subscribe((res:any)=>{
      console.log("data saved successfully");
    })
  }

}
