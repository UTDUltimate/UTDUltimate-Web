import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHeaderComponent } from './team-header.component';

describe('TeamHeaderComponent', () => {
  let component: TeamHeaderComponent;
  let fixture: ComponentFixture<TeamHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
