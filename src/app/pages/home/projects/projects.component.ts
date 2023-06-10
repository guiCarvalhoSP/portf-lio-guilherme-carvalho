import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/utils/interfaces/IProjects';
import { mockProjects } from './projects.mock';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: IProject[] = [mockProjects];

  constructor() { }

  ngOnInit(): void {
  }

}
