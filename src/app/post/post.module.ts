import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ]
})
export class PostModule { }
