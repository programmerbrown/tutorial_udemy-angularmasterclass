import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {
    users: any[];

    constructor(private service: UserService) {

    }

    ngOnInit() {
        this.service.getAll()
                    .subscribe(users => this.users = users);
    }
}