import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit() {}

  toggleAddSensor() {
    // Logik zum Umschalten der Anzeige des Formulars zum Hinzufügen eines Sensors
  }
}
