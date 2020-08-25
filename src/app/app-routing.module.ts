import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/guard/auth-guard';
import { AdminGuard } from './auth/guard/admin-guard';
import { UserGuard } from './auth/guard/user-guard';
import { PatientsComponent } from './user/patients/patients.component';
import { ConfigurationComponent } from './admin/configuration/configuration.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'patients', component: PatientsComponent, canActivate: [UserGuard] },

  { path: 'configuration', component: ConfigurationComponent, canActivate: [AdminGuard] },

  // { path: 'myInfo', component: MyInfoComponent, canActivate: [UserGuard] },
  
  // { path: 'mysalaries', component: MySalariesComponent, canActivate: [UserGuard] },
  // { path: 'salarytargets', component: SalaryTargetsComponent, canActivate: [UserGuard] },

  // { path: 'configuration', component: ConfigurationComponent, canActivate: [AdminGuard] },
  // { path: 'userworkers', component: UserWorkersComponent, canActivate: [AdminGuard] },

  // { path: 'workers', component: WorkersComponent, canActivate: [ManagerGuard] },
  // { path: 'positions', component: PositionsComponent, canActivate: [ManagerGuard] },
  // { path: 'salaries', component: SalariesComponent, canActivate: [ManagerGuard] },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
