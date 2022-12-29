import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  @Input() disabled = true;
  editForm!:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public postData: any) {
    this.editForm = new FormGroup({
      article_Title: new FormControl(''),
      source: new FormControl(''),
      url: new FormControl('')
    });
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.editForm.value);
    
  }

}
