import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout (profileClick)="goToProfile()">
      <nb-menu [items]="menu" tag="menu-sidebar"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/pages/profile']);
  }
}
