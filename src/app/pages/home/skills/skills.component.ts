import { Component, Input, OnInit } from '@angular/core';
import { ISvg_Icons } from 'src/app/utils/icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input('lenguages') 
  lenguagesIcons: ISvg_Icons[] = [];

  @Input('tools') 
  toolsIcons: ISvg_Icons[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
