import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users'; // You can create this endpoint if needed

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  editUser(user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${user.id}`, user);
  }
}
