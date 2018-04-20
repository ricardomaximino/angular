import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BannerConfig } from '../component/banner/banner.component.model';
import { Post } from '../post/post.component.model';
import { MarkDownService } from '../service/mark-down/mark-down.service';
import { PostService } from '../service/post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 0;
  numberOfPosts = 20;
  bannerConfig = new BannerConfig();
  posts: Post[];

  constructor(
    private markDownService: MarkDownService,
    private postService: PostService
    ) { }

  ngOnInit() {
    this.configBanner();
    this.getPost();
  }

  configBanner() {
    this.bannerConfig.image = '../assets/image/home-bg.jpg';
    this.bannerConfig.title = 'Home';
    this.bannerConfig.message = 'Get here last twenty posts';
  }

  parseMarkedDownTextToHtlm(text: string): string {
    return this.markDownService.convert(text);
  }

  getPost() {
    this.posts = this.postService.getData(this.page, this.numberOfPosts);
  }

  getOlderPots() {
    this.page++;
    this.posts = this.postService.getData(this.page, this.numberOfPosts);
  }

}
