import { Observable } from 'rxjs';
import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Course } from './../shared/models/course';
import { Lesson } from './../shared/models/lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses$: Observable<Course[]>;
  latestLessons$: Observable<Lesson[]>;

  constructor(private courseService: CourseService) {

  }

  ngOnInit() {
    this.courses$ = this.courseService.getAllCourses();
    this.latestLessons$ = this.courseService.getAllLessons();
  }

}
