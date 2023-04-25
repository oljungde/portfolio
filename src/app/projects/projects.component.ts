import { Component } from '@angular/core';
import projectsList from './projects-list.json'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectsAmount: number = projectsList.length;

  projects: {
    id: number,
    name: string,
    description: string,
    image: string,
    stack: string,
    url: string,
    git: string
  }[] = projectsList;

}
