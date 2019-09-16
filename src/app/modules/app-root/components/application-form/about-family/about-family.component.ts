import { Component, Input } from "@angular/core";

@Component({
  selector: 'fg-about-family',
  templateUrl: 'about-family.component.html',
  styleUrls: ['./../application-form.component.scss']
})
export class AboutFamily {
  @Input() gapBetweenFormElements;
}