import { Lesson } from 'app/shared/models/lesson';
import * as _ from 'lodash';

export interface Observer {
  next(data: any);
}

export interface Observable {
  subscribe(obs: Observer);
  unsubscribe(obs: Observer);
}

interface Subject extends Observer, Observable { }

class SubjectImplementation implements Subject {
  private observers: Observer[] = [];

  next = (data: any) => this.observers.forEach(o => o.next(data));

  subscribe = (obs: Observer) => this.observers.push(obs);

  unsubscribe = (obs: Observer) => _.remove(this.observers, o => o === obs);
}

class DataStore implements Observable {
  private lessons: Lesson[] = [];
  private lessonsSubject = new SubjectImplementation();

  subscribe(obs: Observer) {
    this.lessonsSubject.subscribe(obs);
    obs.next(this.lessons);
  }

  unsubscribe(obs: Observer) {
    this.lessonsSubject.unsubscribe(obs);
  }

  public initializeLessons(lessons: Lesson[]) {
    this.lessons = _.cloneDeep(lessons);
    this.broadcast();
  }

  public add(lesson: Lesson) {
    this.lessons.push(_.cloneDeep(lesson));
    this.broadcast();
  }

  public delete(deleted: Lesson) {
    _.remove(this.lessons, l => l.id === deleted.id);
    this.broadcast();
  }

  public toggle(toggled: Lesson) {
    const lesson = _.find(this.lessons, l => l.id === toggled.id);
    lesson.completed = !lesson.completed;
    this.broadcast();
  }

  public broadcast() {
    this.lessonsSubject.next(_.cloneDeep(this.lessons));
  }
}

export const store = new DataStore();
