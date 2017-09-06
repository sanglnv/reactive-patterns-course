import { CourseService } from './services/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { routerConfig } from './router.config';
import firebaseConfig from './../environments/firebase.config';
import { CourseListComponent } from './course-list/course-list.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { CourseDetailHeaderComponent } from './course-detail-header/course-detail-header.component';
import { LoginComponent } from './login/login.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent,
    EventBusExperimentsComponent,
    LessonsListComponent,
    LessonsCounterComponent,
    HomeComponent,
    CourseDetailComponent,
    CourseListComponent,
    LessonListComponent,
    CourseDetailHeaderComponent,
    LoginComponent,
    NewsletterComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
