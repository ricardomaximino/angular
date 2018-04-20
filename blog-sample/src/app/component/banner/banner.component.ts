import { Component, OnInit, Input } from '@angular/core';
import { BannerConfig } from './banner.component.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  myStyle = true;
  @Input() bannerConfig: BannerConfig;

}
