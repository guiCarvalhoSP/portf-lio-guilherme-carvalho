import { Component, OnInit } from '@angular/core';
import { ISvg_Icons, iconsLenguages, iconsLibsAndTools } from 'src/app/utils/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lenguagesIcons: ISvg_Icons[];
  toolsIcons: ISvg_Icons[];

  constructor() {
    this.lenguagesIcons = iconsLenguages;
    this.toolsIcons = iconsLibsAndTools;
   }

  ngOnInit(): void {
  }

}
