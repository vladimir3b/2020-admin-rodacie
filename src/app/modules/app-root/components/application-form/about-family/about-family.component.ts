import { Component, Input } from "@angular/core";
import { OnlineFormService } from 'src/app/services/online-form.service';

@Component({
  selector: 'fg-about-family',
  templateUrl: 'about-family.component.html',
  styleUrls: ['./../application-form.component.scss']
})
export class AboutFamily {
  @Input() gapBetweenFormElements;

  constructor(public onlineForm: OnlineFormService) {}

}