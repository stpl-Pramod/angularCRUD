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
    
  }
  onSubmit(){
   // console.log(this.updateForm.value)
    this.id = this.route.snapshot.params['id'];
    this.service.find(this.id).subscribe((data:any)=>{
      this.updateForm = data;
      console.log(data);
    })
    this.service.update(this.id, this.updateForm.value).subscribe((res:any)=>{
    console.log(res);
    })
  }

}
