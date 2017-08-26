import { Component } from '@angular/core';

@Component({
    selector: 'title-element',
    template: ` 
        <input [(ngModel)]=title /><br>
        <h1>{{ title | titlecase | movietitle }}</h1>
    `
})
export class TitleComponent { 
    title;
}