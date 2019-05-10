import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAirplaneDialogComponent } from './delete-airplane-dialog.component';

describe('DeleteAirplaneDialogComponent', () => {
  let component: DeleteAirplaneDialogComponent;
  let fixture: ComponentFixture<DeleteAirplaneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAirplaneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAirplaneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
