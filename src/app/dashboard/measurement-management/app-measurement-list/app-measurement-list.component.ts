import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MOCK_MEASUREMENTS } from '../../../Mocks/mock-measurements';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './app-measurement-list.component.html',
  styleUrls: ['./app-measurement-list.component.scss']
})
export class AppMeasurementListComponent implements OnInit {
  @Input() currentPage: number = 0;
  @Output() selectPageEvent = new EventEmitter<number>();
  public measurements = MOCK_MEASUREMENTS;
  public pageSize = 10;
  public paginatedMeasurements: any[] = [];

  ngOnInit(): void {
    this.onPageChange(this.currentPage);
  }

  onPageChange(newPage: number) {
    const startIndex = newPage * this.pageSize;
    this.paginatedMeasurements = this.measurements.slice(startIndex, startIndex + this.pageSize);
    this.currentPage = newPage;
    this.selectPageEvent.emit(newPage);
  }

  protected readonly Math = Math;
}
