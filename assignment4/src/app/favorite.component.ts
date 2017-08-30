import { Component } from '@angular/core';

@Component({
    selector: 'favorite',
    template:`
    <span class="glyphicon" (click)="toggleIcon()" [class.glyphicon-star]="isActive" [class.glyphicon-star-empty]="!isActive" aria-hidden="true">{{ numOfLikes }}</span>  
    `
})
export class FavoriteComponent {
    numOfLikes: number = 10;
    isActive: boolean = false;

    toggleIcon() {
        this.isActive = !this.isActive;
    }
}