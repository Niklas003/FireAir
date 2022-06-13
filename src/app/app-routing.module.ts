import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionConfigComponent } from './mission-config/mission-config.component';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [
  { path: 'startpage', component: StartpageComponent },
  { path: 'mission-config', component: MissionConfigComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
