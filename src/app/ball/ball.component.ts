import { Component, OnInit } from '@angular/core';

import { State } from '../state/state';

@Component({
  inputs: [ 'state' ],
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

  private state : State;

  constructor() { }

  ngOnInit() {
  }

}
