import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../utils/shared/shared.module';

import { CarrouselComponent } from './carrousel/carrousel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MobileMenuComponent } from './header/mobile-menu/mobile-menu.component';
import { PhotoComponent } from './header/photo/photo.component';

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
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarrouselComponent
  ]
})
export class ComponentsModule { }
