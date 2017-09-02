import { Component } from '@angular/core';
import { Input     } from '@angular/core';

@Component({
    selector: 'zippy',
    templateUrl: './zippy.component.html',
    styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
    //@Input() title: string;
    isOpen: boolean = false;
    
    toggle() {
        this.isOpen = !this.isOpen;
    }
}