import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterPageComponent } from './roster-page.component';

describe('RosterPageComponent', () => {
  let component: RosterPageComponent;
  let fixture: ComponentFixture<RosterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
