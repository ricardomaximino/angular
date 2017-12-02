import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { CommonError } from '../common/common-error';
import { CommonNotFoundError } from '../common/common-not-found-error';

@Injectable()
export class CrudService {
    constructor(private http: Http, private url: string) {
     }

     create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
        .catch(this.handleError);
     }

     update(resource) {
         return this.http.put(this.url, JSON.stringify(resource))
         .catch(this.handleError);
     }

     getById(id) {
         return this.http.get(this.url + '/' + id)
         .catch(this.handleError);
     }

     getAll() {
         return this.http.get(this.url)
         .catch(this.handleError);
     }

     delete(id) {
         return this.http.delete(this.url + '/' + id)
         .catch(this.handleError);
     }

     private handleError(error: Response) {
         if (error.status === 404) { return Observable.throw(new CommonNotFoundError()); }
         return Observable.throw(new CommonError());
     }
}
