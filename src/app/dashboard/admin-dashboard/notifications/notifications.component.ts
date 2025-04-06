import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications: string[] = [];

  sendNotification(message: string): void {
    if (message) {
      this.notifications.push(message);
    }
  }
}
