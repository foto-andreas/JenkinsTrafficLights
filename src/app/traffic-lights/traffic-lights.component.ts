import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Stages } from '../state/stages';
import { State } from '../state/state';

@Component({
  selector: 'app-traffic-lights',
  templateUrl: './traffic-lights.component.html',
  styleUrls: ['./traffic-lights.component.css']
})
export class TrafficLightsComponent implements OnInit {

  private stagesList;
  private stageSelection : string[];

  constructor(private stages : Stages, private activatedRoute : ActivatedRoute) { 
  }

  ngOnInit() {
     this.activatedRoute
        .queryParams
        .subscribe(params => {
            this.stages.setBaseUrl(params['jenkins']);
            this.stages.setJob(params['job']);
            let sel : string = params['stages'];
            if (sel != null)
              this.stages.setStageSelection(sel.split(','));
            console.log(this.stageSelection);
        });
  }

}
