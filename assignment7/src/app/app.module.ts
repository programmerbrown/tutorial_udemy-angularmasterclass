import { BrowserModule        } from '@angular/platform-browser';
import { NgModule             } from '@angular/core';

import { AppComponent         } from './app.component';
import { PasswordComponent    } from './password/password.component';
import { FormsModule          } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
