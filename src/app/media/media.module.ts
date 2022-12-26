import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    MediaComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,

    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MediaModule { }
