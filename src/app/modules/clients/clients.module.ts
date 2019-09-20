import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../libraries/angular-material.module';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AppRouterModule } from '../app-router/app-router.module';

const DECLARATIONS = [
  LoginComponent,
  SignInComponent
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
    AppRouterModule
  ],
  exports: [
    ...DECLARATIONS
  ]
})
export class ClientsModule {}