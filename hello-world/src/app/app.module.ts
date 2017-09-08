import { CoursesService       } from './courses.service';
import { CoursesComponent     } from './courses.component';
import { BrowserModule        } from '@angular/platform-browser';
import { FormsModule          } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';
import { NgModule             } from '@angular/core';

import { AppComponent         } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent  } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    ContactFormComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
