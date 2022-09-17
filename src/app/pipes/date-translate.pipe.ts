import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTranslate'
})
export class DateTranslatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    let data = value.split(' ');
    let month = data.shift();
    let year = data.shift();
    
    switch (month) {
      case 'January':
        month = 'Enero';
        break;
      case 'February':
        month = 'Febrero';
        break;
      case 'March':
        month = 'Marzo';
        break;
      case 'April':
        month = 'Abril';
        break;
      case 'May':
        month = 'Mayo'
        break;
      case 'June':
        month = 'Junio';
        break;
      case 'July':
        month = 'Julio';
        break;
      case 'August':
        month = 'Agosto';
        break;
      case 'September':
        month = 'Septiembre';
        break;
      case 'October':
        month = 'Octubre';
        break;
      case 'November':
        month = 'Noviembre';
        break;
      case 'December':
        month = 'Diciembre';
        break;
    }



    return month + ' ' + year;
  }

}
