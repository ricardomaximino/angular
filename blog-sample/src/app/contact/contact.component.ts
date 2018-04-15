import { Component, OnInit, Input } from '@angular/core';
import { BannerConfig } from '../component/banner/banner-model.component';
import { FormConfig, ButtonConfig, InputConfig, TextareaConfig } from '../component/form/form.component.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formConfig: FormConfig;
  bannerConfig: BannerConfig;
  message = 'Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!';

  constructor() { }

  ngOnInit() {
    this.configBanner();
    this.configForm();
  }

  configBanner() {
    this.bannerConfig = new BannerConfig();
    this.bannerConfig.image = '../assets/image/contact-bg.jpg';
    this.bannerConfig.title = 'Title';
    this.bannerConfig.message = 'Message';
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
    textarea.numberOfLines = '5';
    this.formConfig.textarea = textarea;

  }

  formSubmit(data) {
    console.log('receveid');
    console.log(data);
  }

}
