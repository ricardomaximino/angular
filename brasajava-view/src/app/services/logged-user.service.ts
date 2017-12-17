import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { User } from '../common/common-user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggedUserService {
    user: User = new User('Ricardo Maximino', 35);
    usuario: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);

    chageName(name: string): void {
        this.user.name = name;
        this.usuario.next(this.user);
    }

    chageAge(age: number): void {
        this.user.age = age;
        this.usuario.next(this.user);
    }

    getUser(): Observable<User> {
        return this.usuario.asObservable();
    }

}
