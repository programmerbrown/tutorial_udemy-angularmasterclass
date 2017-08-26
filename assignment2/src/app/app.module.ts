import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
//   constructor(private mdIconRegistry: MdIconRegistry, private domSanitizer: DomSanitizer){
//     mdIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/favorite_border.svg'));
// }
}
