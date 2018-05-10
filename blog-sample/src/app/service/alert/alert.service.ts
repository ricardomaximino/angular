import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Alert } from './alert.model';
import { CommonError } from '../../error/common-error';

@Injectable()
export class ToastAlertService {
  alertList: Alert[] = [];

  constructor() {}

  getNotification(): Observable<Alert[]> {
    return Observable.create(observer => {
      observer.next(this.alertList);
    }).catch(this.handleError);
  }

  addNotification(alert: Alert) {
    this.alertList.push(alert);
  }

  removeNotification() {
      this.alertList.splice(0, 1);
  }

  removeNotificationById(id: number) {
    console.log('the id sent to this method: ' + id);
    this.alertList.splice(id, 1);
}

  isEmpty(): boolean {
    if (this.alertList.length === 0) {
      return true;
    }
    return false;
  }

  private handleError(error: Response) {
    return Observable.throw(new CommonError(error));
  }
}
