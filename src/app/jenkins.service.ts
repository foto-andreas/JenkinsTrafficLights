import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Stages } from './state/stages';
import { State } from './state/state';

@Injectable()
export class JenkinsService {

  constructor(private http: Http, private stages : Stages) { 
  }

  update() {
    this.stages.setJob("ThePipeline");
    this.stages.put(new State("CheckCommit", "SUCCESS", 23, new Date()));
    this.stages.put(new State("SystemTests", "UNSTABLE", 27, new Date()));
  }

}
