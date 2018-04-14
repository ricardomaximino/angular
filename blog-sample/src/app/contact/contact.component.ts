import { Component, OnInit, Input } from '@angular/core';
import { BannerConfig } from '../component/banner/banner-model.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  bannerConfig: BannerConfig;
  constructor() { }

  ngOnInit() {
    this.configBanner();
  }

  configBanner() {
    this.bannerConfig = new BannerConfig();
    this.bannerConfig.image = '../assets/image/contact-bg.jpg';
    this.bannerConfig.title = 'Title';
    this.bannerConfig.message = 'Message';
  }

}
