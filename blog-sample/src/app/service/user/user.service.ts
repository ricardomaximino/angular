import { Injectable } from '@angular/core';
import { User } from '../../profile/profile.component.model';

@Injectable()
export class UserService {
  user: User;

  constructor() { }


}
