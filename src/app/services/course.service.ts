import { Course } from './../shared/models/course';
import { Lesson } from './../shared/models/lesson';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor(private db: AngularFireDatabase) { }

  getAllCourses(): Observable<Course[]> {
    return this.db.list('courses')
      .first()
      .do(console.log);
  }

  getAllLessons(): Observable<Lesson[]> {
    return this.db.list('lessons', {
      query: {
        orderByKey: true,
        limitToLast: 10
      }
    })
    .first()
    .do(console.log);
  }

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.db.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
      .first()
      .map(data => data[0]);

  }

  findLessonsForCourse(courseId: string): Observable<Lesson[]> {
    return this.db.list('lessons', {
      query: {
        orderByChild: 'courseId',
        equalTo: courseId
      }
    })
      .first();
  }
}
