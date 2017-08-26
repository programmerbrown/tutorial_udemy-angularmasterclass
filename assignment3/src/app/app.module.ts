import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';

//import { Pipe } from '@angular/core';
import { TitlePipe } from './title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
