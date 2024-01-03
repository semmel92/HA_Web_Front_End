import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule} from "@angular/material/table";

import { AppComponent} from "./app.component";
import { DashboardComponent} from "./dashboard/dashboard.component";
import { AddMeasurementComponent} from "./dashboard/measurement-management/add-measurement/add-measurement.component";
import { AppMeasurementListComponent} from "./dashboard/measurement-management/app-measurement-list/app-measurement-list.component";
import {HeaderComponent} from "./header/header.component";
import {AddSensorComponent} from "./dashboard/sensor-management/add-sensor/add-sensor.component";
import { AppSensorListComponent} from "./dashboard/sensor-management/app-sensor-list/app-sensor-list.component";
import {SensorService} from "./shared/services/sensor.service";
import {MeasurementService} from "./shared/services/measurement.service";
import {SensorDataComponent} from "./data-display/sensor-data/sensor-data.component";
import {MeasurementDataComponent} from "./data-display/measurement-data/measurement-data.component";




@NgModule({
  declarations:[
    AppComponent,
    DashboardComponent,
    AddMeasurementComponent,
    AppMeasurementListComponent,
    HeaderComponent,
    AddSensorComponent,
    AppSensorListComponent,
    SensorDataComponent,
    MeasurementDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [
    SensorService,
    MeasurementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}
