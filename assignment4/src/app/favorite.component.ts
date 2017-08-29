import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { MdIconModule } from '@angular/material';


@Component({
    selector: 'favorite',
    template:`
    <button (click)="toggleIcon()" style="border: none; background-color: white;">
        <md-icon aria-hidden="true" [svgIcon]="iconState"></md-icon> 
    </button> 
    <div>{{ numOfLikes }}</div>   
    `
})
export class FavoriteComponent {
    numOfLikes: number = 10;
    iconState = "favorite_border";

    constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon('favorite_border', sanitizer.bypassSecurityTrustResourceUrl('assets/favorite_border.svg'));
        iconRegistry.addSvgIcon('favorite', sanitizer.bypassSecurityTrustResourceUrl('assets/favorite.svg'))
      }

    toggleIcon() {
        if(this.iconState == "favorite_border")
            this.iconState = "favorite";
        else
            this.iconState = "favorite_border";
    }
}