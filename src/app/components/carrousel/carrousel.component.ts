import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IPanelContent } from 'src/app/utils/IPainelContent';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarrouselComponent implements OnInit {

  // @Input()
  panels: IPanelContent[] = [
    {
      title: 'Teste',
      content: 'Lorem ipsum dolor sit',
    },
    {
      title: 'Teste2',
      content: 'Lorem ipsum dolor sit amet ',
    },
    {
      title: 'Teste3',
      content: 'Lorem ipsum dolor sit amet ',
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
