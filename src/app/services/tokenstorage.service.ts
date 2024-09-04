import { Injectable } from '@angular/core';
import { Token } from '../modules/token';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class TokenstorageService {

  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: Token): void {
 localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  }

  public getToken(): Token | null {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return JSON.parse(token);
    }
    return null;
  }

  public getTokenValue(): string | null {
    const token = this.getToken();
    if (token) {
      return token.jwtToken;
    }
    return null;
  }

  public getRoles(): string[] | null {
    const token = this.getToken();
    if (token) {
      return token.roles;
    }
    return null;
  }

  public getUsername(): string | null {
    const token = this.getToken();
    if (token) {
      return token.username;
    }
    return null;
  }

  public hasRole(role: string): boolean | null {
    const token = this.getToken();
    if (token) {
      return token.roles.includes(role);
    }
    return null;
  }
}
