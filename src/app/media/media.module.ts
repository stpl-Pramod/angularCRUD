import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ShowListDialogComponent } from './show-list-dialog/show-list-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
@NgModule({
  declarations: [
    MediaComponent,
    ShowListDialogComponent,
    EditDialogComponent,
    AddDialogComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,

    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class MediaModule { }
