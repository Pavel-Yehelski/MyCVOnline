import { Component, OnInit } from '@angular/core';
//import {UserService} from '../user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }
  // constructor(private userService:UserServise) { }
  

  ngOnInit() {
  }

}

