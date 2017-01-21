import { Component, OnInit } from '@angular/core';

import { State } from '../state/state';

@Component({
  inputs: ['state'],
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {

  private state : State;

  private name : string;
  private status : string;
  private build : number;
  private time : string;

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.name = this.state.name;
    this.status = this.state.status;
    this.build = this.state.build;
    this.time = this.state.time.toLocaleString();
  }

}
