import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id!: number;
  postData:any;
  singleData:any;

  
  updateForm = new FormGroup({
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
  constructor(public service:PostServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    //debugger;
    this.service.find().subscribe((data:any)=>{
      this.postData = data.responseData.responseData;
      //console.log(data);
      //console.log(this.postData.find(this.postData.mediaId = this.id));
      //console.log("geettt");
      this.singleData = this.postData.filter((d1:any) => d1.mediaId == this.id);
      //console.log(this.singleData);
    });
    // this.onSubmit(){
    //   this.router.navigateByUrl('post/index')
    // }
  }
  // get f(){
  //   return this.updateForm.controls;
  // }
  onSubmit(){
   //console.log(this.updateForm.value)
    
    let updateObj = {
      "createdBy": 0,
      "modifiedBy": 0,
      "createdDate": new Date(),
      "modifiedDate": new Date(),
      "isDeleted": true,
      "id": this.id,
      "article_Title": this.updateForm.value.article_Title,
      "source": this.updateForm.value.source,
      "url": this.updateForm.value.url
    }
    
    this.service.update(updateObj).subscribe((res:any)=>{
   // console.log(res);
    });
    this.router.navigateByUrl('post/index')
    
  }

  
  



}
