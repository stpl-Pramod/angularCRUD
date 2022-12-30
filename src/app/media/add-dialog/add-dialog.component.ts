import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  addMediaForm = new FormGroup({
    createdBy : new FormControl(1),
    modifiedBy : new FormControl(0),
    createdDate : new FormControl(new Date),
    modifiedDate : new FormControl(new Date),
    isDeleted : new FormControl(true),
    id : new FormControl(0),
    article_Title : new FormControl(),
    source : new FormControl(),
    url : new FormControl()
  })
  constructor(private service:MediaService, public router:Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    debugger
    this.service.addMedia(this.addMediaForm.value).subscribe((res: any) => {
      console.log("add media");
      if (res.statusCode == 200) {
        this.router.navigateByUrl('/media');
      }
    })
  }

}
