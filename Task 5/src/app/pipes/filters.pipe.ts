import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): [] {
    let filteredEmp:any=value.filter((e:any)=>{if(e.firstName=="Anthony") return e});
    console.log(filteredEmp)
    return filteredEmp;
  }
}
