import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../libraries/angular-material.module';
import { CommonModule } from '@angular/common';

const DECLARATIONS = [
  LoginComponent
];

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    FormsModule,
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...DECLARATIONS
  ]
})
export class ClientsModule {}