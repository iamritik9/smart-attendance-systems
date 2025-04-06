import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component'; 
import { HomeComponent } from './landing-page/home/home.component';
import { AboutComponent } from './landing-page/about/about.component';
import { FeaturesComponent } from './landing-page/features/features.component';
import { ServicesComponent } from './landing-page/services/services.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { AuthGuard } from './services/auth.guard';

// Import Login & Dashboards
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { FacultyDashboardComponent } from './dashboard/faculty-dashboard/faculty-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';

// Admin Features
import { AddUsersComponent } from './dashboard/admin-dashboard/add-users/add-users.component'; 
import { UserManagementComponent } from './dashboard/admin-dashboard/user-management/user-management.component';
import { ManageAttendanceComponent } from './dashboard/admin-dashboard/manage-attendance/manage-attendance.component';
import { GenerateReportsComponent } from './dashboard/admin-dashboard/generate-reports/generate-reports.component';
import { AcademicCalendarComponent } from './dashboard/admin-dashboard/academic-calendar/academic-calendar.component';
import { FaceDataComponent } from './dashboard/admin-dashboard/face-data/face-data.component';
import { NotificationsComponent } from './dashboard/admin-dashboard/notifications/notifications.component';

// Student Dashboard Features
import { AttendanceComponent } from './dashboard/student-dashboard/attendance/attendance.component';
import { TimetableComponent } from './dashboard/student-dashboard/timetable/timetable.component';
import { CourseDetailsComponent } from './dashboard/student-dashboard/course-details/course-details.component';
import { BranchInfoComponent } from './dashboard/student-dashboard/branch-info/branch-info.component';
import { ReportCardComponent } from './dashboard/student-dashboard/report-card/report-card.component';
import { FaceDataComponent as StudentFaceDataComponent } from './dashboard/student-dashboard/face-data/face-data.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },

  // Login Page
  { path: 'login', component: LoginComponent },

  // Role-Based Dashboards (Protected)
  { path: 'dashboard/student', component: StudentDashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/faculty', component: FacultyDashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },

  // Admin-Specific Routes (Protected)
  { path: 'dashboard/admin/add-users', component: AddUsersComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/admin/manage-users', component: UserManagementComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/admin/manage-attendance', component: ManageAttendanceComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/admin/generate-reports', component: GenerateReportsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/admin/academic-calendar', component: AcademicCalendarComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/admin/face-data', component: FaceDataComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/admin/notifications', component: NotificationsComponent, canActivate: [AuthGuard] },

  // Student Dashboard Navigation Pages
  { path: 'dashboard/student/attendance', component: AttendanceComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/student/timetable', component: TimetableComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/student/course-details', component: CourseDetailsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/student/branch-info', component: BranchInfoComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/student/report-card', component: ReportCardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/student/face-data', component: StudentFaceDataComponent, canActivate: [AuthGuard] },
];
