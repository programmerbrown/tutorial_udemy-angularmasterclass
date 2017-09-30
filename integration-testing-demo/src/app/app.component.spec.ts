/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterLinkWithHref, RouterOutlet} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([])],
      declarations: [ AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });

});
