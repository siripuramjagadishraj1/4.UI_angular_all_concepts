import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorCustomComponent } from './decorator-custom.component';

describe('DecoratorCustomComponent', () => {
  let component: DecoratorCustomComponent;
  let fixture: ComponentFixture<DecoratorCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratorCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
