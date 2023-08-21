import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: MenuItem[];
  activeItem: MenuItem;
  isShrunk: boolean = false; // Asegúrate de inicializar esta variable

  constructor() {
    this.items = [
      { label: 'Yo', icon: 'pi pi-user' },
      { label: 'Productos', icon: 'pi pi-shopping-cart' },
      { label: 'Servicios', icon: 'pi pi-cog' },
    ];
    this.activeItem = this.items[0];
  }
}
