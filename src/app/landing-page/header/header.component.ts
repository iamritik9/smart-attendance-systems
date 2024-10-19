import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoPath: string = 'assets/favicon.png';
  name: string = "Smart Attendance System";

  login() {
    alert("Login Button Clicked");
  }

  LinkDetails = [
    {
      Name: 'Home',
      URL: "//",
    },
    {
      Name: 'About',
      URL: "//",
    },
    {
      Name: 'Our Features',
      URL: "//",
    },
    {
      Name: 'Contact',
      URL: "//",
    }
  ]
}
