import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'important'
})

export class ImportantPipe implements PipeTransform {

  transform(value: string, isImportant: boolean): string {
    if(isImportant) {
      return value + "!";
    }
    return value;
  }
}
