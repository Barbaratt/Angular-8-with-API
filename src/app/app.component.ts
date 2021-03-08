
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private router: Router){ }

navigateToList() {
  this.router.navigateByUrl('/list');
}
navigateToUpdate() {
  this.router.navigateByUrl('/update');
}

}
