import { Course } from './../shared/models/course';
import { Lesson } from './../shared/models/lesson';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor(private db: AngularFireDatabase) { }

  getAllCourses(): Observable<Course[]> {
    return this.db.list('courses').do(console.log);
  }

  getAllLessons(): Observable<Lesson[]> {
    return this.db.list('lessons', {
        query: {
            orderByKey: true,
            limitToLast: 10
        }
    })
    .do(console.log);
  }
}
