import { Component  } from '@angular/core';
import { Input      } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
    selector: 'zippy',
    templateUrl: './zippy.component.html',
    styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
    @Input() title: string;
    isOpen: boolean = false;
    
    toggle() {
        return this.isOpen = !this.isOpen;
    }
}