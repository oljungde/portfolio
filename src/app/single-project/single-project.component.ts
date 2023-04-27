import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent {
  @Input() id: number | undefined;
  @Input() name: string | undefined;
  @Input() image: string | undefined;
  @Input() stack: string | undefined;
  @Input() description: string | undefined;
  @Input() url: string | undefined;
  @Input() git: string | undefined;
  @Input() projectsAmount: number | undefined;
  @Input() index: number | undefined;
}
