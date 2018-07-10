import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jay2Component } from './jay2.component';

describe('Jay2Component', () => {
  let component: Jay2Component;
  let fixture: ComponentFixture<Jay2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jay2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
