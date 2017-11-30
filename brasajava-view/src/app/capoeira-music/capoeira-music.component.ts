import { Component, OnInit } from '@angular/core';
import { CapoeiraMusicService } from './capoeira-music.service';
import { CapoeiraMusic } from './capoeira-music';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-capoeira-music',
  templateUrl: './capoeira-music.component.html',
  styleUrls: ['./capoeira-music.component.css']
})
export class CapoeiraMusicComponent implements OnInit {

  musics = new Array<CapoeiraMusic>();

  constructor(private service: CapoeiraMusicService) {
    this.musics = service.getSpring();
  }

  ngOnInit() {

  }

}
