import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp, private http: Http) { }

  getOrders() { 
    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
