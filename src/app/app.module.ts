import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component'; // Ensure this component exists and path is correct
import { EspacestagiareComponent } from './espacestagiare/espacestagiare.component';
import { RegisterComponent } from './register/register.component';
import { StageListComponent } from './stage-list/stage-list.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { CreateStageComponent } from './create-stage/create-stage.component';
import { StageApplicantsDialogComponent } from './stage-applicants-dialog/stage-applicants-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { ListstagresComponent } from './liststagres/liststagres.component';
import { EncadrantstgrsComponent } from './encadrantstgrs/encadrantstgrs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { MyapplicationsComponent } from './myapplications/myapplications.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent, // Ensure this is declared and correctly imported
    EspacestagiareComponent,
    RegisterComponent,
    StageListComponent,
    CreateStageComponent,
    StageApplicantsDialogComponent,
    ListstagresComponent,
    EncadrantstgrsComponent,
    NavbarComponent,
    UserSidebarComponent,
    MyapplicationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule // Add BrowserAnimationsModule here
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
