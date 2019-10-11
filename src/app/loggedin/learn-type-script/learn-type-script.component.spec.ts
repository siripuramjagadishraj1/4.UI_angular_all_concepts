import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTypeScriptComponent } from './learn-type-script.component';

describe('LearnTypeScriptComponent', () => {
  let component: LearnTypeScriptComponent;
  let fixture: ComponentFixture<LearnTypeScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnTypeScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnTypeScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
