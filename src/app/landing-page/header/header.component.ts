import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  logoUrl = './assets/images/Logo.jpg';
  showRoles = false; // Role selection initially hidden

  menuItems = [
    { name: 'Home', link: '/home', target: 'home' },
    { name: 'About', link: '/about', target: 'about' },
    { name: 'Features', link: '/features', target: 'features' },
    { name: 'Services', link: '/services', target: 'services' },
    { name: 'Contact', link: '/contact', target: 'contact' }
  ];

  constructor(private router: Router) {}

  toggleRoleSelection() {
    this.showRoles = !this.showRoles;
  }

  navigateToLogin(role: string) {
    this.showRoles = false; // Hide role selection popup
    this.router.navigate(['/login'], { queryParams: { role } });
  }
  
}
