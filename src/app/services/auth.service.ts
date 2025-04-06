import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/login`, { email, password, role }, { responseType: 'json' });
  }
  

  register(user: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/register`, user, { responseType: 'text' });
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
  }

  setLoggedInUser(user: any): void {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  getLoggedInUser(): any {
    return JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  }
}
