import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      title: 'Automated Attendance Marking',
      description: 'Automatically marks attendance using facial recognition, improving accuracy and reducing manual tasks.',
    },
    {
      title: 'High Accuracy Face Detection',
      description: 'Advanced AI algorithms to detect and verify multiple faces with high precision in real-time.',
    },
    {
      title: 'Simultaneous Multi-Face Detection',
      description: 'Simultaneous face detection for multiple individuals, ensuring accurate attendance in large groups.',
    },
    {
      title: 'Real-Time Alerts and Notifications',
      description: 'Sends real-time notifications and alerts to students and faculty about attendance status.',
    }
  ];
}
