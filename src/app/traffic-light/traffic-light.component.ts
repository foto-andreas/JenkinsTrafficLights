import { Component, OnInit, OnChanges } from '@angular/core';

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
  private comitters : string;
  private link : string;
  private age : number;
  private opacity: number;

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.name = this.state.name;
    this.status = this.state.status;
    this.build = this.state.build;
    this.time = this.state.time.toLocaleString();
    this.age = Math.round((new Date().getTime() - this.state.time.getTime()) / 1000 / 60 / 60); // Stunden
    this.opacity = Math.min(1, Math.max(0.3, 1-this.age/120))
    this.comitters = this.state.comitters;
    this.link = this.state.link;
  }

}
