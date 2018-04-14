import { Component, OnInit } from '@angular/core';
import { BannerConfig } from '../component/banner/banner-model.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  bannerConfig: BannerConfig;
  body = [];
  el: any;
  constructor() { }

  ngOnInit() {
    this.setBody();
    this.configBanner();
    console.log(this.body);
  }

  configBanner() {
    this.bannerConfig = new BannerConfig();
    this.bannerConfig.image = '../assets/image/post-bg.jpg';
    this.bannerConfig.title = 'Title';
    this.bannerConfig.message = 'Message';
  }
  setBody() {
    this.el = new TextElement('p', 'Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman s earth, if free men make it, will be truly round: a globe in practice, not in theory.');
    this.body.push(this.el);
    this.el = new TextElement('p', 'Science cuts two ways, of course; its products can be used for both good and evil. But theres no turning back from science. The early warnings about technological dangers also come from science.');
    this.body.push(this.el);
    this.el = new TextElement('p', 'What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.');
    this.body.push(this.el);
    this.el = new TextElement('p', 'A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. Thats how I felt seeing the Earth for the first time. I could not help but love and cherish her.');
    this.body.push(this.el);
    this.el = new TextElement('p', 'For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.');
    this.body.push(this.el);
    this.el = new TextElement('p', 'There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.');
    this.body.push(this.el);
    this.el = new TextElement('blockquote', 'The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.');
    this.body.push(this.el);
    this.el = new TextElement('p', 'Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.');
    this.body.push(this.el);
    this.el = new TextElement('h2', 'Reaching for the Stars');
    this.body.push(this.el);
    this.el = new TextElement('p', 'As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.');
    this.body.push(this.el);
    this.el = new Anchor('home');
    this.el.content = '';
    const subImage = new Image('../assets/image/home-bg-jpg', '');
    this.el.elements = [];
    this.el.elements.push(subImage);
    this.body.push(this.el);
    // tslint:disable-next-line:max-line-length
    this.el = new TextElement('p', 'Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.');
    this.body.push(this.el);
    // tslint:disable-next-line:max-line-length
    this.el = new TextElement('p', 'As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature,Man must explore, and this is exploration at its greatest.');
    this.body.push(this.el);
    this.el = new TextElement('p', 'Placeholder text by');
    this.el.elements = [];
    const anchorOne = new Anchor('home', 'Space Ipsum');
    const textOne = new TextElement('text', 'Photographs by');
    const anchorTwo = new Anchor('home', 'NASA on The Commons');
    const textTwo = new TextElement('text', '.');
    this.el.elements.push(anchorOne);
    this.el.elements.push(textOne);
    this.el.elements.push(anchorTwo);
    this.el.elements.push(textTwo);
    this.body.push(this.el);
  }
}

export class TextElement {

  public style?: string[];
  public elements: any[];

  constructor(public type?: string, public content?: string) {}
}

export class Anchor {
  public type: string;
  public style: string[];
  public elements: any[];

  constructor(public href?: string, public content?: string) {
    this.type = 'a';
  }
}

export class Image {
  public style: string[];
  public elements: any[];
  public type: string;

  constructor(public src?: string, public content?: string) {
    this.type = 'img';
  }
}
