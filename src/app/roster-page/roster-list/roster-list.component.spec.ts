import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterListComponent } from './roster-list.component';

describe('RosterListComponent', () => {
  let component: RosterListComponent;
  let fixture: ComponentFixture<RosterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
