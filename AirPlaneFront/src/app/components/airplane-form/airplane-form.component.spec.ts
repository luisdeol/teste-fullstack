import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneFormComponent } from './airplane-form.component';

describe('AirplaneFormComponent', () => {
  let component: AirplaneFormComponent;
  let fixture: ComponentFixture<AirplaneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplaneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
