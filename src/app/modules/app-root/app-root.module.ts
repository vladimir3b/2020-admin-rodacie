import { NgModule } from "@angular/core";
import { AngularMaterialModule } from '../libraries/angular-material.module';
import { RootComponent } from './components/root/root.component';

@NgModule({
  imports: [
    AngularMaterialModule
  ],
  declarations: [ RootComponent ],
  bootstrap: [ RootComponent ]
})
export class AppRootModule {}