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
  menuItems = [
    { name: 'Home', link: 'home' },
    { name: 'About Us', link: 'about' },
    { name: 'Features', link: 'features' },
    { name: 'Services', link: 'services' },
    { name: 'Contact', link: 'contact' },
  ];

  sendalert(){
    alert("Hello");
  }
}
