import { Component, Input } from '@angular/core';

@Component({
  selector: 'fg-about-monoparental-family',
  templateUrl: './about-monoparental-family.component.html',
  styleUrls: [ './../application-form.component.scss' ]
})
export class AboutMonoparentalFamily {
  @Input() gapBetweenFormElements;
}