import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingCheatComponent } from './routing-cheat.component';

describe('RoutingCheatComponent', () => {
  let component: RoutingCheatComponent;
  let fixture: ComponentFixture<RoutingCheatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingCheatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingCheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
