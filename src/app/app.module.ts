import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaModule } from './media/media.module';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    MediaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
