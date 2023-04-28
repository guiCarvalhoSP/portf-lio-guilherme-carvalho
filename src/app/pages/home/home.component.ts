import { Component, OnInit } from '@angular/core';

import { iconsLenguages, iconsLibsAndTools, ISvg_Icons } from 'src/app/utils/icons';
import { IPanelContent } from 'src/app/utils/IPainelContent';
import { contentsDifferentials, contentsSoftSkills } from 'src/app/utils/slidesContent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lenguagesIcons: ISvg_Icons[];
  toolsIcons: ISvg_Icons[];

  slidesSoftSkills: IPanelContent[] = contentsSoftSkills;
  slidesDifferentials: IPanelContent[] = contentsDifferentials;

  constructor() {
    this.lenguagesIcons = iconsLenguages;
    this.toolsIcons = iconsLibsAndTools;
   }

  ngOnInit(): void {
  }

}
