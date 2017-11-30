import { Component } from '@angular/core';
import { CapoeiraMusicService } from './capoeira-music/capoeira-music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message = 'Today is a good powering day.';

  constructor(private server: CapoeiraMusicService) { }

  getServer() {
    this.server.getFromService();
  }
  getSpring() {
    this.server.getSpring();
  }
}
