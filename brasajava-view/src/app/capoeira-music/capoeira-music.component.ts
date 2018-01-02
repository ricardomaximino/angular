import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CapoeiraMusic } from './capoeira-music';
import { CommonError } from '../common/common-error';
import { CommonNotFoundError } from '../common/common-not-found-error';
import { CapoeiraMusicClientService } from '../services/capoeira-music-client.service';
import { MusicPart } from './capoeira-music-part';

@Component({
  selector: 'app-capoeira-music',
  templateUrl: './capoeira-music.component.html',
  styleUrls: ['./capoeira-music.component.css']
})
export class CapoeiraMusicComponent implements OnInit {
  music: CapoeiraMusic;
  musics: CapoeiraMusic[];
  deleted: boolean;
  musicPart: string;

  constructor(private service: CapoeiraMusicClientService) {

  }

  ngOnInit() {
    this.getAll();
    this.initMusic();
  }
  private initMusic() {
    this.music = new CapoeiraMusic();
    this.music.musicParts = [];
  }

  addMusicParts() {
    const musicPart = new MusicPart();
    musicPart.musicPart = this.musicPart;
    this.music.musicParts.push(musicPart);
    this.musicPart = '';
  }

  create() {
    console.log(this.music);
    this.service.create(this.music)
    .subscribe(
      response => {
        this.musics.push(response);
        this.initMusic();
      },
      (error: CommonError) => {
        if (error instanceof CommonNotFoundError) {
          alert('Error 404');
        } else {
          Observable.throw( error );
        }
      });
  }

  update() {
    this.service.update(this.music)
    .subscribe(
      response => {
        this.music = response;
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
        this.music = response;
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
        this.musics = response;
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
        this.deleted = response;
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
