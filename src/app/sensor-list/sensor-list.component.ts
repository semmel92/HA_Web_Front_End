import { Component, OnInit } from '@angular/core';
import { MOCK_SENSORS } from '../mocks/mock-sensors';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-sensor-list',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {
  sensors = MOCK_SENSORS;
  displayedColumns: string[] = ['name', 'standort', 'aktiv', 'art'];

  ngOnInit(): void {}
}
