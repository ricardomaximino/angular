import { Component, OnInit } from '@angular/core';
import { BannerConfig } from '../component/banner/banner-model.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  bannerConfig = new BannerConfig();
  constructor() { }

  ngOnInit() {
    this.configBanner();
  }

  configBanner() {
    this.bannerConfig.image = '../assets/image/about-bg.jpg';
    this.bannerConfig.title = 'Title';
    this.bannerConfig.message = 'Message';
  }

}
