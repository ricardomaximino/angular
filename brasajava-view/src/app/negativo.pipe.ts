import { Pipe, PipeTransform } from '@angular/core';
import { validateConfig } from '@angular/router/src/config';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'negativo'
})
export class NegativoPipe implements PipeTransform {

  transform(value: any): any {
    return value;
  }
}
