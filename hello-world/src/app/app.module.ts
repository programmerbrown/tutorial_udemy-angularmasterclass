import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent         } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent  } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
