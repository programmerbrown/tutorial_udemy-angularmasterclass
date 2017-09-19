import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    archives: any[] = [
        { month: "1",
          year: "2017"
        },
        { month: "2",
          year: "2017"
        },
        { month: "3",
          year: "2017"
        }
    ];

    constructor(private router: ActivatedRoute ) {
        
    }

}