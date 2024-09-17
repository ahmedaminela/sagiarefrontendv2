import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Token } from '../modules/token';

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
          if (typeof window !== 'undefined') {
            localStorage.setItem('jwtToken', response.jwtToken);
            localStorage.setItem('username', username);

            // Decode the token to get roles
            const tokenPayload = this.decodeToken(response.jwtToken);
            localStorage.setItem('roles', JSON.stringify(tokenPayload.roles || []));
          }
        })
      );
  }

  getUsername(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('username');
    }
    return null;
  }

  getRoles(): string[] {
    if (typeof window !== 'undefined') {
      const roles = localStorage.getItem('roles');
      return roles ? JSON.parse(roles) : [];
    }
    return [];
  }

  decodeToken(token: string): any {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('JWT does not have 3 parts');
    }
    const decoded = atob(parts[1]);
    return JSON.parse(decoded);
  }

  signup(userData: any): Observable<any> {
    return this.http.post(SIGNUP_API, userData, { responseType: 'text' });
  }
}
