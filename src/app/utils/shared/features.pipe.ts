import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'features'
})
export class FeaturesPipe implements PipeTransform {

  transform(value: string[]): string {

    let features: string = ''

    value.forEach((feature, index) => {

      features += feature;

      if (index < value.length - 1) 
        features += ', '
    })

    return features;
  }

}
