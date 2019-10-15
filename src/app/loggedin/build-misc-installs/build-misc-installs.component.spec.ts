import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildMiscInstallsComponent } from './build-misc-installs.component';

describe('BuildMiscInstallsComponent', () => {
  let component: BuildMiscInstallsComponent;
  let fixture: ComponentFixture<BuildMiscInstallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildMiscInstallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildMiscInstallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
