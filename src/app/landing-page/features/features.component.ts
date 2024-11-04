import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      title: 'Unmatched Speed',
      description: 'Feel the rush with lightning-fast speeds that elevate your productivity and performance.',
      image: 'assets/images/About.jpg',
      alt: 'Unmatched Speed'
    },
    {
      title: 'Intuitive Design',
      description: 'Navigate with ease using our user-friendly interface, crafted for a seamless experience.',
      image: 'assets/images/About.jpg',
      alt: 'Intuitive Design'
    },
    {
      title: 'State-of-the-Art Security',
      description: 'Rest easy knowing your data is protected by top-tier security protocols and practices.',
      image: 'assets/images/About.jpg',
      alt: 'State-of-the-Art Security'
    },
    {
      title: 'Always-On Support',
      description: 'Our dedicated support team is available around the clock, ensuring you never face challenges alone.',
      image: 'assets/images/About.jpg',
      alt: 'Always-On Support'
    }
  ];
}