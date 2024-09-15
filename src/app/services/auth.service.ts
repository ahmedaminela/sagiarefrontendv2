import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Token } from '../modules/token'; // Ensure the path is correct

const AUTH_API = 'http://localhost:8080/auth/signin';
const SIGNUP_API = 'http://localhost:8080/auth/signup';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // Method to handle user login
  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(AUTH_API, { username, password })
      .pipe(
        tap(response => {
          // Only access localStorage if it exists (in the browser)
          if (typeof window !== 'undefined') {
            localStorage.setItem('jwtToken', response.jwtToken);
            localStorage.setItem('username', username); // Store the username
          }
        })
      );
  }

  getUsername(): string | null {
    // Only access localStorage if it exists (in the browser)
    if (typeof window !== 'undefined') {
      return localStorage.getItem('username');
    }
    return null;
  }

  // Method to handle user signup
  signup(userData: any): Observable<any> {
    return this.http.post(SIGNUP_API, userData, { responseType: 'text' });
  }
}