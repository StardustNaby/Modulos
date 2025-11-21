import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <div class="sidebar-profile" (click)="onProfileClick()">
          <nb-user 
            [picture]="user.picture" 
            [name]="user.name"
            size="medium">
          </nb-user>
        </div>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {
  @Output() profileClick = new EventEmitter<void>();
  
  user = {
    name: 'Groovia Coach',
    picture: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80',
  };

  onProfileClick() {
    this.profileClick.emit();
  }
}
