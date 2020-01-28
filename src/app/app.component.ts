import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
itemValue='';
item:Observable<any[]>;
  constructor(public db: AngularFireDatabase,private route : Router,private authenticationService:AuthenticationService) {
    this.item=db.list('items').valueChanges();
   }
  // constructor(private route : Router) { }



 
email: string;
password: string;
 
signUp() {
this.authenticationService.SignUp(this.email, this.password);
this.email = '';
this.password = '';
}
 
signIn() {
this.authenticationService.SignIn(this.email, this.password);
this.email = '';
this.password = '';
}
 
signOut() {
this.authenticationService.SignOut();
}
 
}