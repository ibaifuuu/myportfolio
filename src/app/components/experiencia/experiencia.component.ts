import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  tabs:any[] = [];
  constructor() {
    this.tabs = [
        { name: 'LKS', date: '15/10/2020 10:30', image: '../../../assets/img/lks.png' },
    ];
}

}
