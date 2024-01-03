import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMeasurementListComponent } from './app-measurement-list.component';

describe('MeasurementListComponent', () => {
  let component: AppMeasurementListComponent;
  let fixture: ComponentFixture<AppMeasurementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMeasurementListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMeasurementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
