import { Lesson } from './../shared/models/lesson';
import { Course } from './../shared/models/course';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-detail-header',
  templateUrl: './course-detail-header.component.html',
  styleUrls: ['./course-detail-header.component.css']
})
export class CourseDetailHeaderComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  lessons: Lesson[];

  @Input()
  firstName: string;

  @Output()
  subscribe = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubscribe(email: string) {
    this.subscribe.emit(email);
  }

}
