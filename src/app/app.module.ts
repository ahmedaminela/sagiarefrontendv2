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
import { CreateStageComponent } from './create-stage/create-stage.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StageApplicantsDialogComponent } from './stage-applicants-dialog/stage-applicants-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ListstagresComponent } from './liststagres/liststagres.component';
import { EncadrantstgrsComponent } from './encadrantstgrs/encadrantstgrs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component'; // For the button in dialog
import { MatIconModule } from '@angular/material/icon';
import { MyapplicationsComponent } from './myapplications/myapplications.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    EspacestagiareComponent,
    RegisterComponent,
    StageListComponent,
    CreateStageComponent,
    StageApplicantsDialogComponent,
    ListstagresComponent,
    EncadrantstgrsComponent,
    NavbarComponent,
    UserSidebarComponent,
    MyapplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Include ReactiveFormsModule here
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideAnimationsAsync() 
    // Add AuthInterceptor here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
