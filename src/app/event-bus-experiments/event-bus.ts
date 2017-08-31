import * as _ from 'lodash';

export interface Observer {
  notify(data: any);
}

interface Subject {
  registerObserver(type: string, obs: Observer);
  unregisterObserver(type: string, obs: Observer);
  notifyObservers(type: string, data: any);
}

class EventBus implements Subject {
  private observers: {[key: string]: Observer[]} = {};

  registerObserver(type: string, obs: Observer): void {
    this.getObsByType(type).push(obs);
  }

  unregisterObserver(type: string, obs: Observer): void {
    _.remove(this.getObsByType(type), o => o === obs);
  }

  notifyObservers(type: string, data: any): void {
    this.getObsByType(type).forEach(obs => obs.notify(data));
  }

  getObsByType(type: string): Observer[] {
    const obs = this.observers[type];
    if (!obs) {
      this.observers[type] = [];
    }

    return this.observers[type];
  }

}

export const globalEventBus = new EventBus();
