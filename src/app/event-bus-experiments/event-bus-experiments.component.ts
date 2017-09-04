import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { store } from 'app/event-bus-experiments/app-data';
import { Lesson } from './../shared/models/lesson';
import { lessons } from './../shared/models/test-lessons';

@Component({
  selector: 'app-event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {
  @ViewChild('input', { read: ElementRef }) input: ElementRef;

  constructor() { }

  ngOnInit() {
    store.initialize(lessons.slice());
    setTimeout(() => {
      const lesson: Lesson = {
        id: Math.random(),
        description: 'New lesson from API',
        duration: '11:00'
      };

      store.add(lesson);

    }, 10000);
  }

  addLession(e, title: string): void {
    const lesson: Lesson = {
      id: Math.random(),
      description: title
    };
    store.add(lesson);
    this.input.nativeElement.value = '';
  }

}
