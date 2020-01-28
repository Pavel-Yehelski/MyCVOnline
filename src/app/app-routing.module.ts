import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { CompaniesComponent } from './companies/companies.component';




const routes: Routes = [
  {path : 'home', component :HomeComponentComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'aboutus', component : AboutusComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'companies', component : CompaniesComponent},
  {path : '**', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
