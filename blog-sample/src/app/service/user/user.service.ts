import { Injectable } from '@angular/core';
import { User, ProfileConfig } from '../../profile/profile.component.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { CommonError } from '../../error/common-error';

@Injectable()
export class UserService {
  user: User;

  constructor() {
    this.createUser();
   }

  getLoggedUser(): Observable<User> {
    return Observable.create(observer => {
      observer.next(this.user);
    }).catch(this.handleError);
  }

  createUser() {
    this.user = new User();
    this.user.id = 1;
    this.user.name = 'Elena';
    this.user.lastname = 'Keylan';
    this.user.profile = new ProfileConfig();
    this.user.profile.banner = '../../assets/image/profileBanner.jpeg';
    this.user.profile.profile = '../../assets/image/profileProfile.jpeg';
    this.user.profile.message = 'I aloways try my best to become better, but never try to be the best.';
    return this.user;
  }

  private handleError(error: Response) {
    return Observable.throw(new CommonError(error));
  }
}
