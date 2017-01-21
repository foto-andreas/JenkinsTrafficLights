import { Component, OnInit } from '@angular/core';

import { JenkinsService } from './jenkins.service';

import { Stages } from './state/stages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title = 'Traffic Lights';

  constructor(private jenkins : JenkinsService, private stages : Stages) {
    this.jenkins.update();
    this.title = this.stages.getJob();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.title = this.stages.getJob();
  }

}

