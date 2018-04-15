import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable()
export class MarkDownService {
  markdown: any;

  constructor() {
    this.markdown = marked;
    this.markdown.setOptions({
      gfm: true,
      breaks: false
    });
   }

   convert(text: string) {
     return this.markdown.parse(text);
   }


}
