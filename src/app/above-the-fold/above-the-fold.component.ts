import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss']
})
export class AboveTheFoldComponent {
  linkTo: string = '#';
  linkName: string = 'Send a message';

}
