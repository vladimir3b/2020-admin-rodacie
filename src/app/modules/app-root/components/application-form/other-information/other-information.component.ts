import { Input, Component } from '@angular/core';

@Component({
  selector: 'fg-other-information',
  templateUrl: './other-information.component.html',
  styleUrls: [ 
    './other-information.component.scss',
    './../application-form.component.scss'
  ]
})
export class OtherInformationComponent {
  @Input() gapBetweenFormElements;
}