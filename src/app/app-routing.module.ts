import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionConfigComponent } from './mission-config/mission-config.component';
import { MissionDateComponent } from './missionConfigPages/mission-date/mission-date.component';
import { MissionMonitoringComponent } from './missionConfigPages/mission-monitoring/mission-monitoring.component';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [
  { path: 'startpage', component: StartpageComponent },
  { path: 'mission-config', component: MissionConfigComponent },
  { path: 'mission-date', component: MissionDateComponent },
  { path: 'mission-monitoring', component: MissionMonitoringComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
