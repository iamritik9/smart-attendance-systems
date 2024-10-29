import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoUrl = './assets/images/Logo.jpg';

  name: any = '';
  link: any = '';
  icon: any = '';
  menuItems = [
    { name: 'Home', link: 'home', icon: 'fas fa-home' },
    { name: 'About', link: 'about', icon: 'fas fa-info-circle' },
    { name: 'Features', link: 'features', icon: 'fas fa-star' },
    { name: 'Services', link: 'services', icon: 'fas fa-cogs' },
    { name: 'Contact', link: 'contact', icon: 'fas fa-phone' },
  ];

  sendalert() {
    alert("Hello");
  }
}
