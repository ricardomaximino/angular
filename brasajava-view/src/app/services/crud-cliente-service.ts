import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { CommonError } from '../common/common-error';
import { CommonNotFoundError } from '../common/common-not-found-error';

@Injectable()
export class CrudClientService <T> {
    constructor(private http: HttpClient, private url: string) {
     }

     create(resource): Observable<T> {
        return this.http.post<T>(this.url, JSON.stringify(resource))
        .catch(this.handleError);
     }

     update(resource): Observable<T> {
         return this.http.put<T>(this.url, JSON.stringify(resource))
         .catch(this.handleError);
     }

     getById(id): Observable<T> {
         return this.http.get<T>(this.url + '/' + id)
         .catch(this.handleError);
     }

     getAll(): Observable<T[]> {
         return this.http.get<T[]>(this.url)
         .catch(this.handleError);
     }

     delete(id): Observable<boolean> {
         return this.http.delete<boolean>(this.url + '/' + id)
         .catch(this.handleError);
     }

     private handleError(error: Response) {
         if (error.status === 404) { return Observable.throw(new CommonNotFoundError()); }
         return Observable.throw(new CommonError());
     }
}
