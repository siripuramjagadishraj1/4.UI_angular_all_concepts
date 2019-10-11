import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallingStuffComponent } from './installing-stuff.component';

describe('InstallingStuffComponent', () => {
  let component: InstallingStuffComponent;
  let fixture: ComponentFixture<InstallingStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallingStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallingStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
