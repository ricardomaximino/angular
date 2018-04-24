import { Injectable } from '@angular/core';
import { User, ProfileConfig } from '../../profile/profile.component.model';

@Injectable()
export class UserService {
  user: User;

  constructor() { }

  getLoggedUser() {
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

}
