import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  mediaForm = new FormGroup({
    createdBy: new FormControl(1),
    modifiedBy: new FormControl(0),
    createdDate: new FormControl(new Date),
    modifiedDate: new FormControl(new Date),
    isDeleted: new FormControl(true),
    id: new FormControl(0),
    article_Title: new FormControl(),
    source: new FormControl(),
    url: new FormControl(),
  })
  //router: any;
  constructor(private service:PostServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.mediaForm.value);
    this.service.createMedia(this.mediaForm.value).subscribe((res:any)=>{
      console.log("data saved successfully");
      this.router.navigateByUrl('post/index');
    })
  }

}
