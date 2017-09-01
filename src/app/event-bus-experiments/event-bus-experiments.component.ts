import { Lesson } from './../shared/models/lesson';
import { lessons } from './../shared/models/test-lessons';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { globalEventBus } from 'app/event-bus-experiments/event-bus';
import {
  LESSONS_LIST,
  ADD_LESSON
} from '../shared/constants/event-types';

@Component({
  selector: 'app-event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {
  lessons: Lesson[];
  @ViewChild('input', {read: ElementRef}) input: ElementRef;

  constructor() { }

  ngOnInit() {
    this.lessons = lessons.slice();
    globalEventBus.notifyObservers(LESSONS_LIST, this.lessons);

    setTimeout(() => {
      this.lessons.push({id: Math.random(), description: 'New lesson arriving from API'});
      globalEventBus.notifyObservers(LESSONS_LIST, this.lessons);
    }, 10000);
  }

  addLession(e, title: string): void {
    globalEventBus.notifyObservers(ADD_LESSON, title);
    this.input.nativeElement.value = '';
  }

}
