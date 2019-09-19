import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../app-root/components/basic-pages/page-not-found/page-not-found.component';
import { HomePageComponent } from '../app-root/components/basic-pages/home-page/home-page.component';
import { AboutUsComponent } from '../app-root/components/basic-pages/about-us/about-us.component';
import { ContactUsComponent } from '../app-root/components/basic-pages/contact-us/contact-us.component';
import { ApplicationFormComponent } from '../app-root/components/application-form/application-form.component';
import { LoginComponent } from '../clients/components/login/login.component';

const ROUTES: Routes = [
  {
    path: 'not-found-404',
    component: PageNotFoundComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'application-form',
    component: ApplicationFormComponent
  },
  {
    path: '**',
    redirectTo: 'not-found-404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}