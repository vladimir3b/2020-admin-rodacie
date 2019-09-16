import { Component, Input } from '@angular/core';

@Component({
  selector: 'fg-about-mother',
  templateUrl: './about-mother.component.html',
  styleUrls: [ './../application-form.component.scss' ]
})
export class AboutMotherComponent {
  @Input() gapBetweenFormElements;
}