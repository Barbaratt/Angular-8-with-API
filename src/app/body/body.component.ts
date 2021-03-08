import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../app-routing.module';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent  {
  logoimg = './../assets/images/logoods.png';


  constructor(private router: Router){ }

  navigateToList() {
    this.router.navigateByUrl('/list');
  }
  navigateToUpdate() {
    this.router.navigateByUrl('/update');
  }

  // btnClick = function() {
  //   this.router.navigateByUrl('./../list/list.component.html');
  // };

  // btnClick2 = function() {
  //   this.router.navigateByUrl('./../update/update.component.html');
  // };

}

// export class BodyComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
