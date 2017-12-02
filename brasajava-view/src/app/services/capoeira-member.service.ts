import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CrudService } from './crud-service';

@Injectable()
export class CapoeiraMemberService extends CrudService {
    constructor(http: Http) {
        super(http, 'http://localhost:8080/public/capoeira/member');
     }
}
