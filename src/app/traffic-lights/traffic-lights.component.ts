import { Component, OnInit } from '@angular/core';

import { Stages } from '../state/stages';
import { State } from '../state/state';

@Component({
  selector: 'app-traffic-lights',
  templateUrl: './traffic-lights.component.html',
  styleUrls: ['./traffic-lights.component.css']
})
export class TrafficLightsComponent implements OnInit {

  private stagesList;

  constructor(private stages : Stages) { 
    this.stages = stages;
  }

  ngOnInit() {
    this.stagesList = this.stages.getStages().entries();
  }

  ngOnChanges() {
  }

}
