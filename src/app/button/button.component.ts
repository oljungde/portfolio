import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() linkTo: string | undefined;
  @Input() linkName : string | undefined;
  @Input() linkTarget : string | undefined;

}
