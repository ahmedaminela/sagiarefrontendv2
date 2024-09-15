import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.css'
})
export class UserSidebarComponent  implements OnInit {
  userFullName: string = '';

  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    // Retrieve the username from localStorage
    this.userFullName = this.authService.getUsername() || 'Guest';
  }
  isSidebarExpanded: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isSidebarExpanded = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isSidebarExpanded = false;
  }
  navigateToSettings(): void {
    this.router.navigate(['/settings']); // Update this path based on your routing configuration
  }
}
