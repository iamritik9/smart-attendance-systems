import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  selectedRole: string = '';
  showPassword: boolean = false;
  errorMessage: string = '';

  roles = [
    { value: 'student', label: 'Student', icon: 'fas fa-user-graduate' },
    { value: 'faculty', label: 'Faculty', icon: 'fas fa-chalkboard-teacher' },
    { value: 'admin', label: 'Admin', icon: 'fas fa-user-shield' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Get role from query params (if exists)
    this.route.queryParams.subscribe(params => {
      if (params['role']) {
        this.selectedRole = params['role'];
      }
    });

    // Initialize login form with validation
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Select a user role
  selectRole(role: string): void {
    this.selectedRole = role;
    this.errorMessage = ''; // Reset error message when role changes
  }

  // Toggle password visibility
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Handle user login
  login(): void {
    if (!this.selectedRole) {
      this.errorMessage = '⚠️ Please select a role.';
      return;
    }

    if (this.loginForm.invalid) {
      this.errorMessage = '⚠️ Please enter valid credentials.';
      return;
    }

    const email = this.loginForm.value.email.trim();
    const password = this.loginForm.value.password.trim();

    this.authService.login(email, password, this.selectedRole).subscribe({
      next: (user) => {
        if (user) {
          const userRole = user.role?.toLowerCase();
          if (userRole === this.selectedRole.toLowerCase()) {
            this.authService.setLoggedInUser(user);
            this.router.navigate([`/dashboard/${userRole}`]);
          } else {
            this.errorMessage = '❌ Selected role does not match your account role.';
          }
        } else {
          this.errorMessage = '❌ Invalid login attempt.';
        }
      },
      error: () => {
        this.errorMessage = '❌ Invalid email or password.';
      }
    });
  }

  // Handle Forgot Password
  forgotPassword(): void {
    const email = prompt('Enter your registered email:');
    if (email) {
      alert(`✅ If your email exists, a reset link has been sent to ${email}`);
    }
  }
}
