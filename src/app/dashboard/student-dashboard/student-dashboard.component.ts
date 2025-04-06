import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  showProfileDropdown: boolean = false;
  isSidebarCollapsed: boolean = JSON.parse(localStorage.getItem('isSidebarCollapsed') || 'false');
  
  userName: string = 'Student';
  userEmail: string = 'student@example.com';
  userCourse: string = 'B.Tech Computer Science, Sem 6';
  userId: string = '220101120082';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Load Sidebar State
    this.isSidebarCollapsed = JSON.parse(localStorage.getItem('isSidebarCollapsed') || 'false');

    // Load Logged-in User Data
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    if (loggedInUser?.name && loggedInUser?.email) {
      this.userName = loggedInUser.name;
      this.userEmail = loggedInUser.email;
      this.userCourse = loggedInUser.course || 'B.Tech CSE';
      this.userId = loggedInUser.id || 'N/A';
    } else {
      this.router.navigate(['/login']); // Redirect to login if user is not authenticated
    }
  }
  
  /** Sidebar Items */
  dashboardItems = [
    { label: 'Dashboard', icon: 'fa-home', route: '/dashboard/student' },
    { label: 'Attendance', icon: 'fa-user-check', route: '/dashboard/student/attendance' },
    { label: 'Timetable', icon: 'fa-calendar-alt', route: '/dashboard/student/timetable' },
    { label: 'Course Details', icon: 'fa-book-open', route: '/dashboard/student/course-details' },
    { label: 'Branch Info', icon: 'fa-university', route: '/dashboard/student/branch-info' },
    { label: 'Report Card', icon: 'fa-file-alt', route: '/dashboard/student/report-card' },
    { label: 'Face Data', icon: 'fa-user-circle', route: '/dashboard/student/face-data' },
  ];

  /** Toggle Sidebar */
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
    const profileContainer = document.querySelector('.profile-container') as HTMLElement;
    const profileDropdown = document.querySelector('.profile-dropdown') as HTMLElement;

    if (
      this.showProfileDropdown &&
      profileDropdown &&
      !profileDropdown.contains(event.target as Node) &&
      profileContainer &&
      !profileContainer.contains(event.target as Node)
    ) {
      this.showProfileDropdown = false;
    }
  }

  /** Navigate to Profile Page */
  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

  /** Forgot Password */
  forgotPassword(): void {
    const email = prompt('Enter your registered email:');
    if (email) {
      alert(`Password reset link has been sent to ${email}`);
    }
  }

  /** Logout */
  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  /** Navigate */
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
