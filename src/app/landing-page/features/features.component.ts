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
      title: 'Automated Attendance Marking',
      description: 'Automatically marks attendance using facial recognition, improving accuracy and reducing manual tasks.',
      image: 'assets/images/automated-attendance.webp'
    },
    {
      title: 'High Accuracy Face Detection',
      description: 'Advanced AI algorithms to detect and verify multiple faces with high precision in real-time.',
      image: 'assets/images/face-detection.webp'
    },
    {
      title: 'Simultaneous Multi-Face Detection',
      description: 'Simultaneous face detection for multiple individuals, ensuring accurate attendance in large groups.',
      image: 'assets/images/multi-face-detection.webp'
    },
    {
      title: 'Real-Time Alerts and Notifications',
      description: 'Sends real-time notifications and alerts to students and faculty about attendance status.',
      image: 'assets/images/real-time-alerts.webp'
    }
  ];
}