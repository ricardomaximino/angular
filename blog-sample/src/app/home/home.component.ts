import { Component, OnInit } from '@angular/core';
import { BannerConfig } from '../component/banner/banner-model.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerConfig = new BannerConfig();

  constructor() { }

  ngOnInit() {
    this.configBanner();
  }

  configBanner() {
    this.bannerConfig.image = '../assets/image/home-bg.jpg';
    this.bannerConfig.title = 'Title';
    this.bannerConfig.message = 'Message';
  }

}
