import { Component, OnInit, OnChanges } from '@angular/core';

import { JenkinsService } from './jenkins.service';

import { Stages } from './state/stages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  constructor(private jenkins : JenkinsService, private stages : Stages) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}

