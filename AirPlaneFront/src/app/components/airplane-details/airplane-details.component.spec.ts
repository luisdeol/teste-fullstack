import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneDetailsComponent } from './airplane-details.component';

describe('AirplaneDetailsComponent', () => {
  let component: AirplaneDetailsComponent;
  let fixture: ComponentFixture<AirplaneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplaneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
