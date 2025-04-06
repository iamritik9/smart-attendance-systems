import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('loggedInUser');

      if (user) {
        try {
          const parsedUser = JSON.parse(user);
          
          // Ensure the user object has a valid role
          if (parsedUser && parsedUser.role) {
            return true;
          }
        } catch (error) {
          console.error('Error parsing user from localStorage:', error);
        }
      }
    }

    // Redirect to login if not authenticated
    this.router.navigate(['/login']);
    return false;
  }
}
