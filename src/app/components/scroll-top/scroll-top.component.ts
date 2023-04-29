import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollTopComponent {
  isShow: boolean = false;
  startShowing = 250;

  constructor() {}

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.startShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  goToTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
