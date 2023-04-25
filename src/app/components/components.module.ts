import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PhotoComponent } from './header/photo/photo.component';
import { MobileMenuComponent } from './header/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhotoComponent,
    MobileMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
