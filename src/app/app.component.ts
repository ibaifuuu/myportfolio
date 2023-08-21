import { Component, OnInit } from '@angular/core';
import { HomeService } from './components/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mycv';
  isShrunk: boolean = false;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.isShrunk$.subscribe(isShrunk => {
      this.isShrunk = isShrunk;
    });
  }
}
