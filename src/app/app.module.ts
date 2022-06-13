import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartpageComponent } from './startpage/startpage.component';

import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';

import { MissionConfigComponent } from './mission-config/mission-config.component';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    MissionConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
