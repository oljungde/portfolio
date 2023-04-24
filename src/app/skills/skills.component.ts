import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      image: 'javascript.png',
      name: 'JavaScript'
    },
    {
      image: 'typescript.png',
      name: 'TypeScript'
    },
    {
      image: 'angular.png',
      name: 'Angular'
    },
    {
      image: 'html.png',
      name: 'HTML'
    },
    {
      image: 'css.png',
      name: 'CSS'
    },
    {
      image: 'firebase.png',
      name: 'Firebase'
    },
    {
      image: 'git-skill.png',
      name: 'Git'
    },
    {
      image: 'scrum.png',
      name: 'Scrum'
    },
    {
      image: 'api.png',
      name: 'Rest-API'
    },
    {
      image: 'material-design.png',
      name: 'Material Design'
    }    
  ];
}
