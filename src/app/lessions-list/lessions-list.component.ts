import { Observer } from './../event-bus-experiments/event-bus';
import { Lession } from './../shared/models/lession';
import { Component, OnInit } from '@angular/core';
import { globalEventBus } from 'app/event-bus-experiments/event-bus';
import {
  LESSIONS_LIST,
  ADD_LESSION
} from '../shared/constants/event-types';

@Component({
  selector: 'app-lessions-list',
  templateUrl: './lessions-list.component.html',
  styleUrls: ['./lessions-list.component.css']
})
export class LessionsListComponent implements OnInit, Observer {
  lessions: Lession[] = [];

  constructor() {
    console.log('Lessions list component is registered as observer');
    globalEventBus.registerObserver(LESSIONS_LIST, this);
  }

  ngOnInit() {
  }

  notify(data: Lession[]) {
    console.log('Lessions list receive data', data);
    this.lessions = data;
  }

}
