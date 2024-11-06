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
    { name: 'Home', link: '/Home', target: 'home' },
    { name: 'About', link: '/About', target: 'about' },
    { name: 'Features', link: '/Features', target: 'features' },
    { name: 'Services', link: '/Services', target: 'services' },
    { name: 'Contact', link: '/Contact', target: 'contact' },
  ];

  sendalert() {
    alert("Hello");
  }
}
