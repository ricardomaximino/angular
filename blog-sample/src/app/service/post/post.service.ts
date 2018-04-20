import { Injectable } from '@angular/core';
import { Post, Author } from '../../post/post.component.model';

@Injectable()
export class PostService {
  posts = [];
  post: Post;

  constructor() {
    this.setData();
  }

  getData(page, numberOfPosts) {
    return this.posts;
  }

  getDataById(id: number): Post {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id === id) {
          this.post = this.posts[i];
          console.log(this.post);
          break;
      }
    }
    return this.post;
  }

  setData() {
    this.posts = [
    new Post(
      1,
      new Author(1, 'Start Bootstrap One'),
      'First Post',
      '## Man must explore, and this is exploration at its greatest\r\n' +
      '### Problems look mighty small from 150 miles up',
      '',
      new Date(),
      new Date()
    ),
    new Post(
      2,
      new Author(2, 'Start Bootstrap Two'),
      'First Post',
      '## I believe every human has a finite number of heartbeats.' +
      'I don\'t intend to waste any of mine.\r\n',
      '',
      new Date(),
      new Date()
    ),
    new Post(
      3,
      new Author(3, 'Start Bootstrap Three'),
      'First Post',
      '## Science has not yet mastered prophecy\r\n' +
      '### We predict too much for the next year and yet far too little for the next ten.',
      '## Science has not yet mastered prophecy\r\n' +
      '### We predict too much for the next year and yet far too little for the next ten.\r\n' +
      '**We predict too much for the next year and yet far too little for the next ten.\r\n**' +
      '**We predict too much for the next year and yet far too little for the next ten.\r\n**' +
      '**We predict too much for the next year and yet far too little for the next ten.\r\n**' +
      '**We predict too much for the next year and yet far too little for the next ten.\r\n**' +
      '**We predict too much for the next year and yet far too little for the next ten.\r\n**' +
      '## Science has not yet mastered prophecy\r\n' +
      '### We predict too much for the next year and yet far too little for the next ten.\r\n' +
      '**We predict too much for the next year and yet far too little for the next ten.\r\n**' +
      '**We predict too much for the next year and yet far too little for the next ten.\r\n**' +
      '**We predict too much for the next year and yet far too little for the next ten.\r\n**' +
      '**We predict too much for the next year and yet far too little for the next ten.\r\n**' +
      '**We predict too much for the next year and yet far too little for the next ten.\r\n**',
      new Date(),
      new Date()
    ),
    new Post(
      4,
      new Author(4, 'Start Bootstrap Four'),
      'First Post',
      '## Failure is not an option\r\n' +
      '### Many say exploration is part of our destiny,' +
      'but it’s actually our duty to future generations.',
      '',
      new Date(),
      new Date()
    )];
  }
}
