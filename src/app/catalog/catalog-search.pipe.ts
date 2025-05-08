import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catalogSearch'
})
export class CatalogSearchPipe implements PipeTransform {

  transform(bikes: any[], ...args: any[]): any {
    const searchText = args[0]?.toLowerCase() || '';
    const filterType = args[1] || '';
  
    return bikes.filter((item: any) =>
      (!searchText || item.vehicleName.toLowerCase().includes(searchText)) &&
      (!filterType || item.vehicleType === filterType)
    );
  }
  

}
