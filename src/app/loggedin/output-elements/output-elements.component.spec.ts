import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputElementsComponent } from './output-elements.component';

describe('OutputElementsComponent', () => {
  let component: OutputElementsComponent;
  let fixture: ComponentFixture<OutputElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
