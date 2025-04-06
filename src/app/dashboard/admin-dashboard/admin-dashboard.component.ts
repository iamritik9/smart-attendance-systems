import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // ✅ For *ngIf, *ngFor, [ngClass]
import { RouterModule } from '@angular/router';  // ✅ For <router-outlet>

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Ensure CommonModule & RouterModule are imported
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  showProfileDropdown: boolean = false;
  isSidebarCollapsed: boolean = JSON.parse(localStorage.getItem('isSidebarCollapsed') || 'false');
  userName: string = 'Ritik Chandra Mishra';
  userEmail: string = 'ritik@example.com';

  constructor(private router: Router) {}

  dashboardItems = [
    
    { label: 'OPAC/Faculty/Student Login', icon: 'fa-sign-in-alt', route: '/dashboard/admin/login' },
    { label: 'Performances', icon: 'fa-tachometer-alt', route: '/dashboard/admin/performance' },
    { label: 'Time Table', icon: 'fa-calendar-alt', route: '/dashboard/admin/timetable' }
  ];
  

  /** Toggle Sidebar Visibility */
  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    localStorage.setItem('isSidebarCollapsed', JSON.stringify(this.isSidebarCollapsed));
  }

  /** Toggle Profile Dropdown */
  toggleProfileDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.showProfileDropdown = !this.showProfileDropdown;
  }

  /** Close Profile Dropdown when clicking outside */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    this.showProfileDropdown = false;
  }

  /** Navigate to Profile Page */
  goToProfile(): void {
    console.log('Navigating to Profile...');
    this.router.navigate(['/profile']);
  }

  /** Forgot Password Functionality */
  forgotPassword(): void {
    const email = prompt('Enter your registered email:');
    if (email) {
      alert(`Password reset link has been sent to ${email}`);
      console.log(`Password reset link requested for: ${email}`);
      // ✅ Here, you can call an API to send a real reset email
    }
  }

  /** Logout Functionality */
  logout(): void {
    console.log('Logging out...');
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  /** Navigate to Dashboard Section */
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
