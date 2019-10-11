import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProjectStructureComponent } from './angular-project-structure.component';

describe('AngularProjectStructureComponent', () => {
  let component: AngularProjectStructureComponent;
  let fixture: ComponentFixture<AngularProjectStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularProjectStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProjectStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
