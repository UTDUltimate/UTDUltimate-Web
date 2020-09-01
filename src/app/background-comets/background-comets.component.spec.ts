import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundCometsComponent } from './background-comets.component';

describe('BackgroundCometsComponent', () => {
  let component: BackgroundCometsComponent;
  let fixture: ComponentFixture<BackgroundCometsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundCometsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundCometsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
