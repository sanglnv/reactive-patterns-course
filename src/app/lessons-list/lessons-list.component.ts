import { Observer } from './../event-bus-experiments/event-bus';
import { Lesson } from './../shared/models/lesson';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { globalEventBus } from 'app/event-bus-experiments/event-bus';
import {
  LESSONS_LIST,
  ADD_LESSON
} from '../shared/constants/event-types';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {
  lessons: Lesson[] = [];

  constructor() {
    globalEventBus.registerObserver(LESSONS_LIST, this);
    globalEventBus.registerObserver(ADD_LESSON, { notify: this.addLesson });
  }

  ngOnInit() {
  }

  addLesson = (title: string): void => {
    if (title) {
      this.lessons.push({ id: Math.random(), description: title });
    }
  }

  notify = (data: Lesson[]) => this.lessons = data.slice();

  // toggleLessonViewed = (lesson: Lesson) => lesson.completed = !lesson.completed;

  toggleLessonViewed(lesson: Lesson) {
    lesson.completed = !lesson.completed;
  }

  deleteLesson(lesson: Lesson) {
    _.remove(this.lessons, l => l === lesson);
  }

}
