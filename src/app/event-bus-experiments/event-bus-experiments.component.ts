import { lessions } from './../shared/models/test-lessions';
import { Component, OnInit } from '@angular/core';
import { globalEventBus } from 'app/event-bus-experiments/event-bus';
import {
  LESSIONS_LIST,
  ADD_LESSION
} from '../shared/constants/event-types';

@Component({
  selector: 'app-event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Top level component broadcast all lessions ...');
    globalEventBus.notifyObservers(LESSIONS_LIST, lessions.slice());
  }

  addLession(e, title: string) {
    console.log(title);
  }

}
