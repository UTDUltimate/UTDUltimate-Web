import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHeaderNavComponent } from './team-header-nav.component';

describe('TeamHeaderNavComponent', () => {
  let component: TeamHeaderNavComponent;
  let fixture: ComponentFixture<TeamHeaderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamHeaderNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
