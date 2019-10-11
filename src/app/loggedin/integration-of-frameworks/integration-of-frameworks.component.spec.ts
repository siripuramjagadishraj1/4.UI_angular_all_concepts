import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationOfFrameworksComponent } from './integration-of-frameworks.component';

describe('IntegrationOfFrameworksComponent', () => {
  let component: IntegrationOfFrameworksComponent;
  let fixture: ComponentFixture<IntegrationOfFrameworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationOfFrameworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationOfFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
