import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { NewContentComponent } from './new-content/new-content.component';
import { DefaultTypePipePipe } from './default-type-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    NewContentComponent,
    DefaultTypePipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
