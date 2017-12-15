import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CapoeiraMusic } from '../capoeira-music/capoeira-music';
import { CrudClientService } from './crud-cliente-service';

@Injectable()
export class CapoeiraMusicClientService extends CrudClientService<CapoeiraMusic> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/public/capoeira/music');
  }
}
