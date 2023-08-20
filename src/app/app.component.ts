import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'mycv';
  isShrunk: boolean = false;

  toggleShrink() {
    this.isShrunk = !this.isShrunk;
  }

}
