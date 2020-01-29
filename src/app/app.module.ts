import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'
// Firebase
import { AngularFireModule } from '@angular/fire';
//import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireDatabaseModule } from '@angular/fire/database';
//import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
//
import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router' 

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { CompaniesComponent } from './companies/companies.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    RegisterComponent,
    AboutusComponent,
    ContactComponent,
    CompaniesComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  //  ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Mainproject'),
    // AngularFireAuthModule,
    AngularFireDatabaseModule, 
AngularFirestoreModule, // Only required for database features
AngularFireAuthModule, // Only required for auth features,
AngularFireStorageModule // Only required for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
