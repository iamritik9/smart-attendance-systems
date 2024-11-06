import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { AboutComponent } from './landing-page/about/about.component';
import { HomeComponent } from './landing-page/home/home.component';
import { FeaturesComponent } from './landing-page/features/features.component';
import { ServicesComponent } from './landing-page/services/services.component';
import { ContactComponent } from './landing-page/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Features', component: FeaturesComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Contact', component: ContactComponent }
];
