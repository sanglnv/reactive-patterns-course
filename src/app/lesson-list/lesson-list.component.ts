import { Lesson } from './../shared/models/lesson';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  @Input()
  lessons: Lesson[];

  constructor() { }

  ngOnInit() {
  }

}
