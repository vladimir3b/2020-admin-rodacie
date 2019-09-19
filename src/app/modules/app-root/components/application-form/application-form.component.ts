import { Component } from '@angular/core';
import { OnlineFormService } from 'src/app/services/online-form.service';
import { UI_VALUES } from 'src/app/app.config';

@Component({
  templateUrl: './application-form.component.html',
  styleUrls: [ './application-form.component.scss' ]
})
export class ApplicationFormComponent {
  gapBetweenFormElements = UI_VALUES.gapBetweenFormElements;

  constructor(public onlineForm: OnlineFormService) { }

}