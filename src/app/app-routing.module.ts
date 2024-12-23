import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EspacestagiareComponent } from './espacestagiare/espacestagiare.component';
import { RegisterComponent } from './register/register.component';
import { StageListComponent } from './stage-list/stage-list.component';
import { CreateStageComponent } from './create-stage/create-stage.component';
import { ListstagresComponent } from './liststagres/liststagres.component';
import { EncadrantstgrsComponent } from './encadrantstgrs/encadrantstgrs.component';
import { MyapplicationsComponent } from './myapplications/myapplications.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect empty path to /login

  { path: 'login', component: AuthComponent },
  { path: 'espacestagiare', component: EspacestagiareComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stages', component: StageListComponent},

  { path: 'createstg', component: CreateStageComponent},
  { path: 'liststgrs', component: ListstagresComponent},
  { path: 'liststgrsencadrant', component: EncadrantstgrsComponent},
  { path: 'myapplications', component: MyapplicationsComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
