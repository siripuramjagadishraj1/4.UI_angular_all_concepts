import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCallsDemoComponent } from './http-calls-demo.component';

describe('HttpCallsDemoComponent', () => {
  let component: HttpCallsDemoComponent;
  let fixture: ComponentFixture<HttpCallsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpCallsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCallsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
