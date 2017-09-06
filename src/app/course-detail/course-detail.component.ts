import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../shared/models/course';
import { Lesson } from '../shared/models/lesson';
import * as _ from 'lodash';
import { CourseService } from '../services/course.service';
import { NewsletterService } from '../services/newsletter.service';


@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;
  lessons: Lesson[];

  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
    private newsletterService: NewsletterService) {

    route.params
      .subscribe(params => {

        const courseUrl = params['id'];

        this.courseService.findCourseByUrl(courseUrl)
          .subscribe(data => {
            this.course = data;

            this.courseService.findLessonsForCourse(this.course.id)
              .subscribe(lessons => this.lessons = lessons);
          });

      });

  }

  onSubscribe(email: string) {
    this.newsletterService.subscribeToNewsletter(email)
      .subscribe(
      () => {
        alert('Subscription successful ...');
      },
      console.error
      );
  }

  ngOnInit() {

  }

}
