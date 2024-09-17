import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  roles: string[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.roles = this.authService.getRoles();
    console.log('Roles in Navbar:', this.roles);
  }

  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }
}
