import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mobileWindow: boolean = false;

  constructor() { 
    this.onRisize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event']) 
  onRisize() {
    if(window.innerWidth < 992) {
      this.mobileWindow = true;
    } else {
      this.mobileWindow = false;
    }
  }

}
