import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  pageTitle: string = 'About';
  imageUrl: string = '/assets/images/About.webp';
  sectionTitle: string = "Smart Attendance System";

  descriptions: string[] = [
    "The Smart Attendance System utilizes advanced facial recognition technology to automatically and accurately track attendance for students, employees, or any organization. This eliminates the need for manual attendance methods, streamlining the attendance process and improving overall security.",
    "Designed to be fast, efficient, and scalable, our system provides real-time updates and ensures the highest standards of data security. Built with technologies like Angular, OpenCV, and TensorFlow, the system offers a seamless and reliable user experience, while maintaining the accuracy and privacy of user data."
  ];
}
