import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeasurementComponent } from './add-measurement.component';

describe('AddMeasurementComponent', () => {
  let component: AddMeasurementComponent;
  let fixture: ComponentFixture<AddMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMeasurementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
