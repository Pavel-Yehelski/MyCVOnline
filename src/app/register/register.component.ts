import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  itemValue = '';
  item: Observable<any[]>;

  constructor(public db: AngularFireDatabase, private authenticationService: AuthenticationService) {
    this.item = db.list('items').valueChanges();
   }

   email: string;
   password: string;

   ngOnInit() { }

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
