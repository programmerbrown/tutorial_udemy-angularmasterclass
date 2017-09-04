import { BrowserModule } from '@angular/platform-browser';
import { NgModule      } from '@angular/core';
import { FormsModule   } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
