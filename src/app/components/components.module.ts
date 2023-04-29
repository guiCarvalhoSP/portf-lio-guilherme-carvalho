import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../utils/shared/shared.module';

import { CarrouselComponent } from './carrousel/carrousel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MobileMenuComponent } from './header/mobile-menu/mobile-menu.component';
import { PhotoComponent } from './header/photo/photo.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhotoComponent,
    MobileMenuComponent,
    CarrouselComponent,
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarrouselComponent,
    ScrollTopComponent
  ]
})
export class ComponentsModule { }
