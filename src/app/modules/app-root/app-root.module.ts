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

@NgModule({
  imports: [
    AngularMaterialModule,
    AppRouterModule
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
    ApplicationFormComponent
  ],
  bootstrap: [ RootComponent ]
})
export class AppRootModule {}