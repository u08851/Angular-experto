import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, status:boolean): any {
    if(status){
      value = value.replace(/[a-z0-20]/gi,"*");
    }else{
      value = value;
    }
    return  value;
  }

}
