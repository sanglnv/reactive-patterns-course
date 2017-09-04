import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {Observer} from 'rxjs';
import { store } from './../event-bus-experiments/app-data';
import { Lesson } from './../shared/models/lesson';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer<Lesson[]> {
  lessons: Lesson[] = [];

  ngOnInit() {
    store.i$.subscribe(this);
  }

  next = (lessons: Lesson[]) => this.lessons = lessons;

  complete = () => console.log('complete');

  error = error => console.error(error);

  toggleLessonViewed(lesson: Lesson) {
    store.toggle(lesson);
  }

  deleteLesson(lesson: Lesson) {
    store.delete(lesson);
  }

}
