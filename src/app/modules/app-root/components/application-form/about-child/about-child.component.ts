import { Component, Input } from "@angular/core";

@Component({
  selector: 'fg-about-child',
  templateUrl: 'about-child.component.html',
  styleUrls: ['./../application-form.component.scss']
})
export class AboutChildComponent {
  @Input() gapBetweenFormElements;
}