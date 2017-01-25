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

    this.http.get("http://andreas:canon1d@localhost:8080/jenkins/job/AmpelTest/projectVariables/api/json")
          .subscribe((res : Response) => {
      let text : string = res.text();
      let vars : Map<string, any> = JSON.parse(text).variables;
      let tf : Map<string, any> = vars['TrafficLights'] as Map<string, any>;
      if (tf != null) {
        this.stages.setJob('AmpelTest');
        this.stages.clear();
        for (let s in tf) {
          this.stages.put(new State(s, tf[s].result as string, tf[s].id, new Date(tf[s].time)));
        }
      } else {
        console.log("no TrafficLights variable found.");
      }
    });
  }

}
