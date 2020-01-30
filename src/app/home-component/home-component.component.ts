import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  onSearch() {
  //  this.route.navigate(['showProperites', this.PropertyType, this.locationText, this.buy, this.rent]);
  }
}
