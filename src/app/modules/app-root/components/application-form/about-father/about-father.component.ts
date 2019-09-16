import { Component, Input } from '@angular/core';

@Component({
  selector: 'fg-about-father',
  templateUrl: './about-father.component.html',
  styleUrls: [ './../application-form.component.scss' ]
})
export class AboutFatherComponent {
  @Input() gapBetweenFormElements;
}