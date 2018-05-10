import { CanActivate } from '@angular/router';

export class AlwaysActivate implements CanActivate {
  canActivate() {
    console.log('Guard Can Always Activate');
    return true;
  }
}
