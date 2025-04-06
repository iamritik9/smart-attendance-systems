import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FeaturesComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'] // ✅ Fixed styleUrls
})
export class LandingPageComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
