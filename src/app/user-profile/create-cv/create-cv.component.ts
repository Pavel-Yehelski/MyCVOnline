import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})
export class CreateCvComponent implements OnInit {

  constructor() { }
  //  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  // addForm: FormGroup;

  ngOnInit() {
  //   this.addForm = this.formBuilder.group({
  //     id: [],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     MainSkills: ['', Validators.required],
  //     age: ['', Validators.required],
  //     WorkExpirience: ['', Validators.required],
  //     Education: ['', Validators.required],
  //   });

  // }

  // onSubmit() {
  //   this.apiService.createUser(this.addForm.value)
  //     .subscribe( data => {
  //       this.router.navigate(['list-user']);
  //     });
  }

}