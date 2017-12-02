import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CrudService } from './crud-service';

@Injectable()
export class CapoeiraMusicService extends CrudService {
    constructor(http: Http) {
        super(http, 'http://localhost:8080/public/capoeira/music');
     }
}
