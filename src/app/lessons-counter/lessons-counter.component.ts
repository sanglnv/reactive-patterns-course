import { Component, OnInit } from '@angular/core';
import {Observer} from 'rxjs';
import { Lesson } from 'app/shared/models/lesson';
import { store } from 'app/event-bus-experiments/app-data';

@Component({
  selector: 'app-lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit, Observer<Lesson[]> {
  lessonsCounter: number;

  ngOnInit() {
    store.i$.subscribe(this);
  }

  next = (lessons: Lesson[]) => this.lessonsCounter = lessons.length || 0;

  complete = () => console.log('complete');

  error = error => console.error(error);

}
