import { NgModule } from "@angular/core";
import { AngularMaterialModule } from '../libraries/angular-material.module';
import { RootComponent } from './components/root/root.component';
import { AppRouterModule } from '../app-router/app-router.module';
import { ContactUsComponent } from './components/basic-pages/contact-us/contact-us.component';
import { AboutUsComponent } from './components/basic-pages/about-us/about-us.component';
import { PageNotFoundComponent } from './components/basic-pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/basic-pages/home-page/home-page.component';
import { HeaderComponent } from './components/root/header/header.component';
import { FooterComponent } from './components/root/footer/footer.component';
import { SidebarNavigationComponent } from './components/root/sidebar-navigation/sidebar-navigation.component';
import { HeaderNavigationComponent } from './components/root/header/header-navigation/header-navigation.component';
import { LogoComponent } from './components/root/header/logo/logo.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { AboutChildComponent } from './components/application-form/about-child/about-child.component';
import { AboutFamily } from './components/application-form/about-family/about-family.component';
import { AboutMonoparentalFamily } from './components/application-form/about-monoparental-family/about-monoparental-family.component';
import { AboutFatherComponent } from './components/application-form/about-father/about-father.component';
import { AboutMotherComponent } from './components/application-form/about-mother/about-mother.component';
import { OtherInformationComponent } from './components/application-form/other-information/other-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AngularMaterialModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    RootComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ContactUsComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    HeaderNavigationComponent,
    SidebarNavigationComponent,
    LogoComponent,
    ApplicationFormComponent,
    AboutChildComponent,
    AboutFamily,
    AboutMonoparentalFamily,
    AboutFatherComponent,
    AboutMotherComponent,
    OtherInformationComponent
  ],
  bootstrap: [ RootComponent ]
})
export class AppRootModule {}