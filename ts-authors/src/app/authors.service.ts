import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

    getAuthors() {
        return ["author 1", "author 2", "author 3", "author 4"];
    }
}