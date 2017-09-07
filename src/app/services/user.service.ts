import { Http, Headers } from '@angular/http';
import { User } from './../shared/models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

const DEFAULT_USER: User = {
  firstName: ''
};

@Injectable()
export class UserService {
  private subject = new BehaviorSubject(DEFAULT_USER);
  public user$: Observable<User> = this.subject.asObservable();

  constructor(private http: Http) { }

  login(email: string, password: string): Observable<User> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/login', { email, password }, headers)
      .map(resp => resp.json())
      .do(console.log)
      .do(user => this.subject.next(user))
      .publishLast()
      .refCount();
  }

  logout() {
    this.subject.next(DEFAULT_USER);
  }
}
