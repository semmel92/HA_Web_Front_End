import {NgModule} from "@angular/core";
import {RouterModule, Routes } from '@angular/router';
import {MeasurementListComponent} from './measurement-list/measurement-list.component';
import {SensorListComponent} from "./sensor-list/sensor-list.component";


export const routes: Routes = [
  { path: 'measurement', component: MeasurementListComponent},
  { path: 'sensor', component: SensorListComponent},
  { path: '', component: SensorListComponent},
  { path: '**', component: SensorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
