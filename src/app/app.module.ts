import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    RegisterComponent,
    AboutusComponent,
    ContactComponent,
    CompaniesComponent,
    UserProfileComponent,
    CreateCvComponent,
    EditeCvComponent,
    CreateCompanyComponent,
    EditeCompanyComponent,
    CreateJobComponent,
    EditeJobComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Mainproject'),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule // Only required for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
