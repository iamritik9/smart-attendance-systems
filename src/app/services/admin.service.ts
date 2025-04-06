import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  addUser(name: string, email: string, password: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addUser`, { name, email, password, role });
  }
}
