import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Stages } from '../state/stages';
import { State } from '../state/state';

@Component({
  selector: 'app-traffic-lights',
  templateUrl: './traffic-lights.component.html',
  styleUrls: ['./traffic-lights.component.css']
})
export class TrafficLightsComponent implements OnInit, OnChanges {

  private stagesList;

  private host : string;
  private port : string;
  private jobName : string;

  constructor(private stages : Stages, private activatedRoute : ActivatedRoute) { 
  }

  ngOnInit() {
     this.activatedRoute
        .params
        .subscribe(params => {
            this.stages.setHost(params['host']);
            this.stages.setPort(params['port']);
            this.stages.setPath(params['path']);
            this.stages.setJob(params['jobname']);
        });
  }

  ngOnChanges() {
    this.stagesList = this.stages.getStages().entries();
  }

}
