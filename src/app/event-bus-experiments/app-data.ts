import { Lesson } from './../shared/models/lesson';
import { Observer, Observable, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

class DataStore {
  private subject = new BehaviorSubject<any>([]);

  public i$: Observable<any> = this.subject.asObservable();

  public initialize(data: any) {
    this.subject.next(_.cloneDeep(data));
  }

  public add(item) {
    const data = this.cloneData();
    data.push(_.cloneDeep(item));
    this.subject.next(data);
  }

  public delete(deleted: any) {
    const data = this.cloneData();
    _.remove(data, (item: any) => item.id === deleted.id);
    this.subject.next(data);
  }

  public toggle(toggled: any) {
    const data: any = this.cloneData();
    const item = _.find(data, (item: any) => item.id === toggled.id);
    item.completed = !item.completed;
    this.subject.next(data);
  }

  public cloneData() {
    return _.cloneDeep(this.subject.getValue());
  }
}

export const store = new DataStore();

export default DataStore;
