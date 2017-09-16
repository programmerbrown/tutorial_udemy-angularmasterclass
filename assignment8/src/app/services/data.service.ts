import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { GeneralError } from '.././common/general-error';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

    constructor(private url: string, private http: Http) {

    }

    getAll() {
        return this.http.get(this.url)
                        .map(response => response.json())
                        .catch(this.handleError);
    }

    private handleError(error: Response) {    
        return Observable.throw(new GeneralError(error));
      }
}