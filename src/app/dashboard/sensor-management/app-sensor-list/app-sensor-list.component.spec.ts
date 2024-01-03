import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppSensorListComponent } from './app-sensor-list.component';

describe('AppSensorListComponent', () => {
  let component: AppSensorListComponent;
  let fixture: ComponentFixture<AppSensorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppSensorListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppSensorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
