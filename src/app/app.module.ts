import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { TrafficLightsComponent } from './traffic-lights/traffic-lights.component';

import { JenkinsService } from './jenkins.service';
import { Stages } from './state/stages';
import { BallComponent } from './ball/ball.component';


const routes : Routes = [
    { path:'', component: TrafficLightsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent,
    TrafficLightsComponent,
    BallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JenkinsService, Stages],
  bootstrap: [AppComponent]
})
export class AppModule { }
