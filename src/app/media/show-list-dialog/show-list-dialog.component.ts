import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-list-dialog',
  templateUrl: './show-list-dialog.component.html',
  styleUrls: ['./show-list-dialog.component.scss']
})
export class ShowListDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public postData: any) { }

  ngOnInit(): void {
  }

}
