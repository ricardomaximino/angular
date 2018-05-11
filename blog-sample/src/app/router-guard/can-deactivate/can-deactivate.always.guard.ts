import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from '../../login/login.component';

export class AlwaysDeactivate implements CanDeactivate<LoginComponent> {
  canDeactivate(component: LoginComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
    console.log('Can Always Deactivate');
    console.log(route.params);
    console.log(state.url);
    return component.rememberme || window.confirm('Are you sure?');
  }
}
