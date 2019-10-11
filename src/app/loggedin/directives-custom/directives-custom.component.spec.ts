import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesCustomComponent } from './directives-custom.component';

describe('DirectivesCustomComponent', () => {
  let component: DirectivesCustomComponent;
  let fixture: ComponentFixture<DirectivesCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
