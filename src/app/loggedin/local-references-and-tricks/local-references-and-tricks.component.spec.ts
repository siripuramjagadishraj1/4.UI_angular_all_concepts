import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalReferencesAndTricksComponent } from './local-references-and-tricks.component';

describe('LocalReferencesAndTricksComponent', () => {
  let component: LocalReferencesAndTricksComponent;
  let fixture: ComponentFixture<LocalReferencesAndTricksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalReferencesAndTricksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalReferencesAndTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
