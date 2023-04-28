import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PhotoComponent } from './header/photo/photo.component';
import { MobileMenuComponent } from './header/mobile-menu/mobile-menu.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { SharedModule } from '../utils/shared/shared.module';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhotoComponent,
    MobileMenuComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    // NgbCarouselModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarrouselComponent
  ]
})
export class ComponentsModule { }
