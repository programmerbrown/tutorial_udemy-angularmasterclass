import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
    selector: 'archive',
    templateUrl: './archive.component.html',
    styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
    year: string;
    month: string;

    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.paramMap
                  .subscribe(param => {
                    this.year = param.get('year');
                    this.month = param.get('month');
                  });
    }

    viewAll() {
        this.router.navigate(['']);
    }
}