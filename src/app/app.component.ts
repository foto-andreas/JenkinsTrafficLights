import { Component, OnInit, OnChanges } from '@angular/core';

import { JenkinsService } from './jenkins.service';

import { Stages } from './state/stages';

@Component({
  inputs: ['stages'],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  private title = 'Traffic Lights';

  constructor(private jenkins : JenkinsService, private stages : Stages) {
    this.jenkins.update();
    this.title = this.stages.getJob();
    console.log("app.1", this.stages);
  }

  ngOnInit() {
    this.jenkins.update();
    console.log("app.2", this.stages);
  }

  ngOnChanges() {
    console.log("app.3", this.stages);
    this.title = this.stages.getJob();
  }

}

