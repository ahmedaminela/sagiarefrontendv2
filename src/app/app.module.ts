import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { EspacestagiareComponent } from './espacestagiare/espacestagiare.component'; // Adjust the path as needed
import { RegisterComponent } from './register/register.component';
import { StageListComponent } from './stage-list/stage-list.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    EspacestagiareComponent,
    RegisterComponent,
    StageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Include ReactiveFormsModule here
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } // Add AuthInterceptor here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
