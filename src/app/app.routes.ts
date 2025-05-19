import { Routes } from '@angular/router';
import { AboutComponent } from './componets/about/about.component';
import { PatientSearchComponent } from './componets/patient-search/patient-search.component';
import { AppCreateComponent } from './componets/app-create/app-create.component';
import { LoginComponent } from './componets/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: PatientSearchComponent },
  { path: 'create-code', component: AppCreateComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'login' }
];
