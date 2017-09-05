import { Course } from './../shared/models/course';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Input()
  courses: Course[];

  constructor() { }

  ngOnInit() {
  }

}
