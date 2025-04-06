import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faculty-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent {
  showProfileDropdown: boolean = false;
  isSidebarCollapsed: boolean = JSON.parse(localStorage.getItem('isSidebarCollapsed') || 'false');
  userName: string = 'Faculty Name';
  userEmail: string = 'faculty@example.com';

  constructor(private router: Router) {}

  dashboardItems = [
    { label: 'Admit Card', icon: 'fa-id-card', route: '/dashboard/admin/admit-card' },
    { label: 'Apply TNP', icon: 'fa-user-graduate', route: '/dashboard/admin/apply-tnp' },
    { label: 'Attendance', icon: 'fa-user-check', route: '/dashboard/admin/manage-attendance' },
    { label: 'Central Communication', icon: 'fa-network-wired', route: '/dashboard/admin/communication' },
    { label: 'College Info', icon: 'fa-university', route: '/dashboard/admin/college-info' },
    { label: 'Courses', icon: 'fa-book-open', route: '/dashboard/admin/courses' },
    { label: 'Feedback', icon: 'fa-comments', route: '/dashboard/admin/feedback' },
    { label: 'Feedback Survey', icon: 'fa-poll', route: '/dashboard/admin/feedback-survey' },
    { label: 'Fees', icon: 'fa-wallet', route: '/dashboard/admin/fees' },
    { label: 'Grievance Complaint', icon: 'fa-exclamation-circle', route: '/dashboard/admin/grievance' },
    { label: 'LMS', icon: 'fa-book', route: '/dashboard/admin/lms' },
    { label: 'My Report Card', icon: 'fa-file-alt', route: '/dashboard/admin/report-card' },
    { label: 'OPAC/Faculty/Student Login', icon: 'fa-sign-in-alt', route: '/dashboard/admin/login' },
    { label: 'Performances', icon: 'fa-tachometer-alt', route: '/dashboard/admin/performance' },
    { label: 'Time Table', icon: 'fa-calendar-alt', route: '/dashboard/admin/timetable' }
  ];

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    localStorage.setItem('isSidebarCollapsed', JSON.stringify(this.isSidebarCollapsed));
  }

  toggleProfileDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.showProfileDropdown = !this.showProfileDropdown;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    this.showProfileDropdown = false;
  }

  goToProfile(): void {
    console.log('Navigating to Profile...');
    this.router.navigate(['/profile']);
  }

  forgotPassword(): void {
    const email = prompt('Enter your registered email:');
    if (email) {
      alert(`Password reset link has been sent to ${email}`);
      console.log(`Password reset link requested for: ${email}`);
    }
  }

  logout(): void {
    console.log('Logging out...');
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
