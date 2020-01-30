import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponentComponent } from './home-component/home-component.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { CompaniesComponent } from './companies/companies.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateCvComponent } from './user-profile/create-cv/create-cv.component';
import { EditeCvComponent } from './user-profile/edite-cv/edite-cv.component';
import { CreateCompanyComponent } from './user-profile/create-company/create-company.component';
import { EditeCompanyComponent } from './user-profile/edite-company/edite-company.component';
import { CreateJobComponent } from './user-profile/create-job/create-job.component';
import { EditeJobComponent } from './user-profile/edite-job/edite-job.component';

const routes: Routes = [

  {path : 'home', component :HomeComponentComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'aboutus', component : AboutusComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'companies', component : CompaniesComponent},
  {path : 'profile', component : UserProfileComponent},
  {path : 'createcv', component : CreateCvComponent},
  {path : 'editecv', component :EditeCvComponent},
  {path : 'createcompany', component : CreateCompanyComponent},
  {path : 'editecompany', component : EditeCompanyComponent},
  {path : 'createjob', component : CreateJobComponent},
  {path : 'editejob', component : EditeJobComponent},
  {path : '**', redirectTo : 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
