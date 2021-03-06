import { Component, OnInit } from '@angular/core';
import { BannerConfig } from '../component/banner/banner.component.model';
import { MarkDownService } from '../service/mark-down/mark-down.service';
import { FormConfig, ButtonConfig, InputConfig, FormData, TextareaConfig } from '../component/form/form.component.model';
import { PostService } from '../service/post/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from './post.component.model';

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
  post: Post;
  title: string;
  snipText: string;
  text: string;
  inputs = [];
  textareas = [];

  constructor(
    private service: MarkDownService,
    private postService: PostService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.configBanner();
    this.route.params.subscribe(param => {
      this.post = this.postService.getDataById(Number(param.id));
      this.setVariablesWithThePostValues();
      this.parseMarkedDownTextToHtlm(this.post.text);
    });
  }

  parseMarkedDownTextToHtlm(text) {
    this.html = this.service.convert(text);
  }

  configBanner() {
    this.bannerConfig = new BannerConfig();
    this.bannerConfig.image = '../assets/image/post-bg.jpg';
    this.bannerConfig.title = 'Post';
    this.bannerConfig.message = 'Enjoy reading this post';
  }
  configForm() {
    this.formConfig = new FormConfig();
    this.formConfig.button = new ButtonConfig('button', 'Save');
    this.formConfig.inputs = [
      new InputConfig('title', 'Title', 'Title of the article', 'Type the title of the article.')
    ];
    const textarea1 = new TextareaConfig('snip', 'Snip Text', 'Type here the snip Text', 'Type the snip Text');
    textarea1.numberOfLines = '5';
    const textarea2 = new TextareaConfig('text', 'Text', 'Type here your text', 'Type the text');
    textarea2.numberOfLines = '25';
    this.formConfig.textareas = [textarea1, textarea2];

    this.inputs.push(this.title);
    this.textareas.push(this.snipText);
    this.textareas.push(this.text);
  }

  formsubmit(data) {
    this.formData = data;
    console.log(data);
    this.parseMarkedDownTextToHtlm(this.formData.textareas[1]);
    this.editing = false;
  }

  setVariablesWithThePostValues() {
    this.title = this.post.title;
    this.snipText = this.post.snipText;
    this.text = this.post.text;
  }

  edit() {
    this.configForm();
    this.editing = true;
  }

  isOwner() {
    return true;
  }

  isEditable() {
    return !this.editing;
  }

}
