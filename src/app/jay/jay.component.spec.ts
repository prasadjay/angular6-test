import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JayComponent } from './jay.component';

describe('JayComponent', () => {
  let component: JayComponent;
  let fixture: ComponentFixture<JayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
