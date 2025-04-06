import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebcamModule, WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  course?: string;
  branch?: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-add-users',
  standalone: true,
  imports: [FormsModule, CommonModule, WebcamModule],
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {
  user: User = { id: 0, name: '', email: '', password: '', role: 'student', course: '', branch: '', imageUrl: '' };
  users: User[] = [];

  // Webcam variables
  webcamEnabled = false;
  private trigger: Subject<void> = new Subject<void>();
  triggerObservable: Observable<void> = this.trigger.asObservable();
  capturedImage: string | null = null;

  constructor() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  // Toggle webcam visibility
  toggleWebcam() {
    this.webcamEnabled = !this.webcamEnabled;
  }

  // Capture image from webcam
  captureImage() {
    this.trigger.next();
  }

  // Handle captured image and store it in the user object
  handleImage(webcamImage: WebcamImage) {
    this.capturedImage = webcamImage.imageAsDataUrl;
    this.user.imageUrl = this.capturedImage;
  }

  // Assign a default password for students and faculty
  generatePassword(): string {
    return this.user.role === 'student' ? 'Student@123' : 'Faculty@123';
  }

  addUser() {
    if (!this.user.name || !this.user.email || (this.user.role === 'student' && (!this.user.course || !this.user.branch))) {
      alert('Please fill all fields!');
      return;
    }

    if (this.users.some(u => u.email === this.user.email)) {
      alert('This email is already registered!');
      return;
    }

    // Assign a unique ID and default password
    this.user.id = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
    this.user.password = this.generatePassword();

    this.users.push({ ...this.user });

    // Store in localStorage (Replace with API call for backend integration)
    localStorage.setItem('users', JSON.stringify(this.users));

    alert(`User added successfully!\nDefault Password: ${this.user.password}`);

    // Reset form fields
    this.user = { id: 0, name: '', email: '', password: '', role: 'student', course: '', branch: '', imageUrl: '' };
    this.capturedImage = null;
  }
}
