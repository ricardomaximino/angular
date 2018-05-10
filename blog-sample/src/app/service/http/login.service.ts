  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/throw';
  import 'rxjs/add/operator/catch';

  import { CommonError } from '../../error/common-error';
  import { NotFoundError } from '../../error/not-found-error';
import { UnauthorizedError } from '../../error/unauthorized-error';

  @Injectable()
  export class LoginService {
    private GET_TOKEN_URL = 'http://localhost:9090/auth';
    private REFRESH_TOKEN_URL = 'http://localhost:9090/refresh';
    private LOG_OUT_URL = '';
    private token: string;

      constructor(private http: HttpClient) {
       }

       getToken(username: string, password: string): Observable<string> {
          return this.http.post<string>(this.GET_TOKEN_URL, {'username': username, 'password': password})
            .catch(this.handleError);
       }

       refreshToken(): Observable<string> {
           return this.http.get<string>(this.REFRESH_TOKEN_URL)
            .catch(this.handleError);
       }

       logout(): Observable<boolean> {
        return this.http.post<string>(this.LOG_OUT_URL, {})
        .catch(this.handleError);
     }

       private handleError(error: Response) {
           if (error.status === 401) { return Observable.throw(new UnauthorizedError()); }
           console.log(error);
           return Observable.throw(error);
       }
  }

