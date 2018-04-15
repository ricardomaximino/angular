import { Component, OnInit } from '@angular/core';
import { BannerConfig } from '../component/banner/banner-model.component';
import { MarkDownService } from '../service/mark-down/mark-down.service';
import { FormConfig, ButtonConfig, InputConfig, FormData, TextareaConfig } from '../component/form/form.component.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  bannerConfig: BannerConfig;
  formConfig: FormConfig;
  formData: FormData;
  html: string;
  editing = false;

  constructor(private service: MarkDownService) { }

  ngOnInit() {
    this.configBanner();
    this.configForm();
  }

  parseMarkedDownTextToHtlm(text) {
    this.html = this.service.convert(text);
  }

  configBanner() {
    this.bannerConfig = new BannerConfig();
    this.bannerConfig.image = '../assets/image/post-bg.jpg';
    this.bannerConfig.title = 'Title';
    this.bannerConfig.message = 'Message';
  }
  configForm() {
    this.formConfig = new FormConfig();
    this.formConfig.button = new ButtonConfig('button', 'Save');
    this.formConfig.inputs = [
      new InputConfig('author', 'Author', 'Author Name', 'Type the author name'),
      new InputConfig('title', 'Title', 'Title of the article', 'Type the title of the article.'),
      new InputConfig('snip', 'Snip Text', 'Type here the snip Text', 'Type the snip Text'),
    ];
    const textarea = new TextareaConfig('post', 'Post', 'Type here your post', 'Type the post');
    this.formConfig.textarea = textarea;
  }

  formsubmit(data) {
    this.formData = data;
    console.log(data);
    this.parseMarkedDownTextToHtlm(this.formData.textarea);
    this.editing = false;
  }

  edit() {
    this.editing = true;
  }

  create() {
    this.editing = true;
  }

}
