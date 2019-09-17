import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'fg-about-child',
  templateUrl: 'about-child.component.html',
  styleUrls: ['./../application-form.component.scss']
})
export class AboutChildComponent implements OnInit{
  @Input() gapBetweenFormElements;
  aboutChildForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.aboutChildForm = this._formBuilder.group({
      'nurseryOption1': [
        null,
        [ Validators.required ]
      ],
      'nurseryOption2': [
        null,
        [ Validators.required ]
      ],
      'firstName': [
        null,
        [ Validators.required ]
      ],
      'lastName': [
        null,
        [ Validators.required ]
      ],
      'pin': [
        null,
        [ Validators.required ]
      ],
      'ageYears': [
        null,
        [ Validators.required ]
      ],
      'ageMonths': [
        null,
        [ Validators.required ]
      ],
      'startingDate': [
        new Date('02-09-2019'),
        [ Validators.required ]
      ]
    });
  }
}