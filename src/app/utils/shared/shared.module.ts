import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturesPipe } from './features.pipe';



@NgModule({
  declarations: [
    FeaturesPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgbCarouselModule,
    FeaturesPipe
  ]
})
export class SharedModule { }
