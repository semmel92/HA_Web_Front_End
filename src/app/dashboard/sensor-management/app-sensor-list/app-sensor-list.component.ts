import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MOCK_SENSORS } from '../../../Mocks/mock-sensors';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './app-sensor-list.component.html',
  styleUrls: ['./app-sensor-list.component.scss']
})
export class AppSensorListComponent implements OnInit {
  @Input() currentPage: number = 0;
  @Output() selectPageEvent = new EventEmitter<number>();
  public sensors = MOCK_SENSORS;
  public pageSize = 10;
  public paginatedSensors: any[] = [];

  ngOnInit(): void {
    this.onPageChange(this.currentPage);
  }

  onPageChange(newPage: number) {
    const startIndex = newPage * this.pageSize;
    this.paginatedSensors = this.sensors.slice(startIndex, startIndex + this.pageSize);
    this.currentPage = newPage;
    this.selectPageEvent.emit(newPage);
  }

  protected readonly Math = Math;
}
