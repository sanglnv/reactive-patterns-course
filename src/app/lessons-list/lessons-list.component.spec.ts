import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessionsListComponent } from './lessions-list.component';

describe('LessionsListComponent', () => {
  let component: LessionsListComponent;
  let fixture: ComponentFixture<LessionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
