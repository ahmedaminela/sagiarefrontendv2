import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenstorageService } from '../services/tokenstorage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  userLoggedIn = '';

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenstorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.status === 'VALID') {
      this.authService
        .login(
          (this.form.get('username') as FormControl).value,
          (this.form.get('password') as FormControl).value
        )
        .subscribe({
          next: (data) => {
            this.tokenStorage.saveToken(data);
            console.log('Token saved:', data.jwtToken); // Log the token to verify

            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.userLoggedIn = <string>this.tokenStorage.getUsername();
            // Redirect to 'espacestagiare' route after successful login
            this.router.navigate(['/liststgrsencadrant']);
          },
          error: (err) => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          },
        });
    }
  }
}
