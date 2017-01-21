import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Stages } from './state/stages';
import { State } from './state/state';

var parseString = require('xml2js').parseString;
var xpath = require("xml2js-xpath");

@Injectable()
export class JenkinsService {

  constructor(private http: Http, private stages : Stages) { 
  }

  update() {

    this.http.get("/assets/test.xml").subscribe((res : Response) => {
      let text : string = res.text();
      parseString(text, function(err, result) {
        if (err) throw err;

        let e = xpath.find(result, "//variables");        
        e = xpath.find(result, ".entry/string[TrafficLights]");        
        console.log(e);

//          ['de.set.jenkins.plugins.jobVariables.ProjectVariablesAction']
//          ['Variables']
      });
    });
    this.stages.setJob("ThePipeline");
    this.stages.put(new State("CheckCommit", "SUCCESS", 23, new Date()));
    this.stages.put(new State("SystemTests", "UNSTABLE", 27, new Date()));
  }

}
