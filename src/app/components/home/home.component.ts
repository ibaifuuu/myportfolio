import { HomeService } from './../home.service';
import { Component,Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { trigger, state, style, animate, transition,  AnimationEvent } from '@angular/animations';
import { MenuItem } from 'primeng/api'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], 
  animations: [
    trigger('shrinkAnimation', [
      state('false', style({ height: '*' })),
      state('true', style({ height: '0', opacity: 0 })),
      transition('false => true', animate('1s')),
      transition('true => false', animate('1s'))
    ])
  ]
})

export class HomeComponent {
  items: MenuItem[]; // Definición de la propiedad items
  activeItem: MenuItem; // Definición de la propiedad activeItem (si lo necesitas)
  isShrunk:boolean = false;

  constructor(private HomeService:HomeService) {
    // Carga los elementos de menú en this.items
    this.items = [
      { label: 'Yo', icon: 'pi pi-user' },
      { label: 'Productos', icon: 'pi pi-shopping-cart' },
      { label: 'Servicios', icon: 'pi pi-cog' },
      // ...otros elementos de menú
    ];
    this.activeItem = this.items[0];
  }
  toggleShrink( ) {
    this.isShrunk = !this.isShrunk;
    this.HomeService.setIsShrunk(this.isShrunk);
  }
}
  