export class Post {
    constructor (
      public id?: number,
      public author?: Author,
      public title?: string,
      public snipText?: string,
      public text?: string,
      public createDate?: Date,
      public updateDate?: Date) {}
}

export class Author {
  constructor(public id?: number, public name?: string) {}
}
