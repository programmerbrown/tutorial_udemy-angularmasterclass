import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'like',
    template:`
    
    <span class="glyphicon glyphicon-heart" (click)="toggleIcon()" [class.liked]="isLiked" aria-hidden="true"></span>
    <span>{{ likesCount }}</span>
    `
})
export class FavoriteComponent {
    @Input() likesCount: number;
    @Input() isLiked: boolean;

    toggleIcon() {
        this.isLiked = !this.isLiked;
        (this.isLiked) ? this.likesCount += 1 : this.likesCount -= 1;
    }
}