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
  ImageUrl = "./assets/images/HomeImage2.jpg";
  homeCaption = "Smart Attendance Made Simple";
  homeDescription = "Utilizing cutting-edge technology, our Smart Attendance System automates attendance marking, providing you with accurate insights and streamlined workflows";

  homeImages = [
    {
      src: "./assets/images/HomeImage1.jpg",
      alt: 'Image 1 description',
    },
    {
      src: './assets/images/HomeImage2.jpg',
      alt: 'Image 2 description',
    }
  ];
}
