import { Component, OnInit, Input } from '@angular/core';
import { BannerConfig } from '../component/banner/banner.component.model';
import { FormConfig, ButtonConfig, InputConfig, TextareaConfig } from '../component/form/form.component.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formConfig: FormConfig;
  bannerConfig: BannerConfig;
  name: string;
  email: string;
  phone: string;
  message: string;
  inputs: any[];
  textareas: any[];

  constructor() { }

  ngOnInit() {
    this.configBanner();
    this.configForm();
    this.inputs = [this.name, this.email, this.phone];
    this.textareas = [this.message];
  }

  configBanner() {
    this.bannerConfig = new BannerConfig();
    this.bannerConfig.image = '../assets/image/contact-bg.jpg';
    this.bannerConfig.title = 'Contact';
    this.bannerConfig.message = 'Do not doubt, contact me now';
  }

  configForm() {
    this.formConfig = new FormConfig();
    this.formConfig.button = new ButtonConfig('button', 'Send');
    this.formConfig.inputs = [
      new InputConfig('name', 'Name', 'Name', 'Type your name.'),
      new InputConfig('email', 'E-mail', 'examples@example.com', 'Type your e-mail.'),
      new InputConfig('phone', 'Phone', '333 555 999', 'Type your phone.')
    ];
    const textarea = new TextareaConfig('message', 'Message', 'Type here your message...', 'Type your message.');
    textarea.numberOfLines = '10';
    this.formConfig.textareas = [textarea];

  }

  formSubmit(data) {
    console.log('receveid');
    console.log(data);
  }

}
