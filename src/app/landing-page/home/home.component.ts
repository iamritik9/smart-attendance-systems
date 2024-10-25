import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    {
      src: "./assets/images/HomeImage1.jpg",
      alt: 'Image 1 description',
      title: 'First Slide',
      description: 'Placeholder content for the first slide.'
    },
    {
      src: './assets/images/HomeImage2.jpg',
      alt: 'Image 2 description',
      title: 'Second Slide',
      description: 'Placeholder content for the second slide.'
    },
    {
      src: './assets/images/HomeImage3.jpg',
      alt: 'Image 3 description',
      title: 'Third Slide',
      description: 'Placeholder content for the third slide.'
    },
  ];
}
