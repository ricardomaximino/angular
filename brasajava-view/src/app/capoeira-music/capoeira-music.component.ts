import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CapoeiraMusicService } from '../services/capoeira-music.service';
import { CapoeiraMusic } from './capoeira-music';
import { CommonError } from '../common/common-error';
import { CommonNotFoundError } from '../common/common-not-found-error';
import { CapoeiraMusicClientService } from '../services/capoeira-music-client.service';

@Component({
  selector: 'app-capoeira-music',
  templateUrl: './capoeira-music.component.html',
  styleUrls: ['./capoeira-music.component.css']
})
export class CapoeiraMusicComponent implements OnInit {
  music: CapoeiraMusic;
  musics: CapoeiraMusic[];
  deleted: boolean;

  constructor(private service: CapoeiraMusicService, private serve: CapoeiraMusicClientService) {

  }

  ngOnInit() {
    this.getById(1);
    this.getAll();
    this.test();
  }

  test() {
    console.log('Controller');
    this.serve.getAll().subscribe(data => {
      console.log(data);
    });
  }

  create(music) {
    this.service.create(music)
    .subscribe(
      response => {
        this.music = response.json();
      },
      (error: CommonError) => {
        if (error instanceof CommonNotFoundError) {
          alert('Error 404');
        } else {
          Observable.throw( error );
        }
      });
  }

  update(music) {
    this.service.update(music)
    .subscribe(
      response => {
        this.music = response.json();
      },
      (error: CommonError) => {
        if (error instanceof CommonNotFoundError) {
          alert('Error 404');
        } else {
          Observable.throw( error );
        }
      });
  }

  getById(id) {
    this.service.getById(id)
    .subscribe(
      response => {
        this.music = response.json();
    },
    (error: CommonError) => {
      if (error instanceof CommonNotFoundError) {
        alert('Error 404');
      } else {
        Observable.throw( error );
      }
    });
  }

  getAll() {
    this.service.getAll()
    .subscribe(
      response => {
        this.musics = response.json();
      },
      (error: CommonError) => {
        if (error instanceof CommonNotFoundError) {
          alert('Error 404');
        } else {
          Observable.throw( error );
        }
      });
  }

  delete(id) {
    this.service.delete(id)
    .subscribe(
      response => {
        this.deleted = response.json();
      },
      (error: CommonError) => {
        if (error instanceof CommonNotFoundError) {
          alert('Error 404');
        }else {
          Observable.throw( error );
        }
      });
  }

}
