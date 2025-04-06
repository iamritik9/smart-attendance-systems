import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

  deleteUser(userId: number) {
    const userToDelete = this.users.find(user => user.id === userId);
    if (!userToDelete) return;

    if (confirm(`Are you sure you want to delete ${userToDelete.name}?`)) {
      this.users = this.users.filter(user => user.id !== userId);
      localStorage.setItem('users', JSON.stringify(this.users));
      alert('User deleted successfully!');
    }
  }

  editUser(user: User) {
    const newName = prompt('Enter new name:', user.name);
    const newEmail = prompt('Enter new email:', user.email);

    if (newName && newEmail) {
      user.name = newName;
      user.email = newEmail;
      localStorage.setItem('users', JSON.stringify(this.users));
      alert('User updated successfully!');
    }
  }
}