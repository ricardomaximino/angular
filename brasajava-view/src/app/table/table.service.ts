
class Tipo {
    constructor(
      public account?: string,
      public balance?: number,
      public firstName?: string,
      public lastName?: string,
      public title?: string
    ) {}
  }

  export class ForTable {
    constructor(
    public data?: [CelData[]],
    public header?: ColumnHeader[],
    public buttonType?: string,
    public actions?: Action[],
    public pagination?: MyPagination
    ) {}
  }

  export class CelData {
    constructor(
      public value?: any,
      public clazz?: string
    ) { }
  }

  export class ColumnHeader {
    constructor (
      public value?: string,
      public clazz?: string
    ) {}
  }

  export class Action {
    constructor(
      public value?: string
    ) {}
  }

  export class MyPagination {
      constructor(
          public siguiente?: string,
          public anterior?: string
      ) {}
  }

  export class MyService {

    table: ForTable;

    getTable(): ForTable {
      const data: [CelData[]] = [
        [{value: '1', clazz: ''}, {value: '2', clazz: ''}, {value: '3', clazz: ''}, {value: '4', clazz: ''}, {value: '5', clazz: ''}],
        [{value: '1', clazz: ''}, {value: '2', clazz: ''}, {value: '3', clazz: ''}, {value: '4', clazz: ''}, {value: '5', clazz: ''}],
        [{value: '1', clazz: ''}, {value: '2', clazz: ''}, {value: '3', clazz: ''}, {value: '4', clazz: ''}, {value: '5', clazz: ''}],
        [{value: '1', clazz: ''}, {value: '2', clazz: ''}, {value: '3', clazz: ''}, {value: '4', clazz: ''}, {value: '5', clazz: ''}],
        [{value: '1', clazz: ''}, {value: '2', clazz: ''}, {value: '3', clazz: ''}, {value: '4', clazz: ''}, {value: '5', clazz: ''}],
        [{value: '1', clazz: ''}, {value: '2', clazz: ''}, {value: '3', clazz: ''}, {value: '4', clazz: ''}, {value: '5', clazz: ''}]
      ];

      const header: ColumnHeader[] = [
        {value: '1', clazz: ''}, {value: '2', clazz: ''}, {value: '3', clazz: ''}, {value: '4', clazz: ''}, {value: '5', clazz: ''}
      ];

      const actions: Action[] = [
          {value: 'send'},
          {value: 'recive'}
      ];

      const pagination: MyPagination = new MyPagination();
      pagination.anterior = 'anterior';
      pagination.siguiente = 'siguiente';


      this.table = new ForTable();
      this.table.data = data;
      this.table.header = header;
      this.table.buttonType = 'radio';
      this.table.actions = actions;
      this.table.pagination = pagination;
      return this.table;
    }
  }
