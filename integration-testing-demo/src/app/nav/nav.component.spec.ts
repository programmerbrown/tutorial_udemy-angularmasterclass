import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import {By} from '@angular/platform-browser';
import {RouterLinkWithHref} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a link to the todos page', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const index = debugElements.findIndex(de => de.properties['href'] === '/todos');

    expect(index).toBeGreaterThan(-1);
  });
});
