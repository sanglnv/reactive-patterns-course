import { LESSONS_LIST } from './../shared/constants/event-types';
import { globalEventBus } from 'app/event-bus-experiments/event-bus';
import { Component, OnInit } from '@angular/core';
import { Lesson } from 'app/shared/models/lesson';

@Component({
  selector: 'app-lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit {
  lessonsCounter: number;

  constructor() {
    globalEventBus.registerObserver(LESSONS_LIST, this);
  }

  ngOnInit() {
  }

  notify(lessons: Lesson[]): void {
    this.lessonsCounter = lessons.length || 0;
  }

}
