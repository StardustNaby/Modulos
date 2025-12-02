import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { NbSidebarService, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar
        class="menu-sidebar"
        tag="menu-sidebar"
        responsive
        start="collapsed"
        containerFixed>
        <div class="sidebar-header">
          <a (click)="toggleSidebar()" href="#" class="sidebar-toggle">
            <nb-icon icon="menu-2-outline"></nb-icon>
          </a>
        </div>
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
export class OneColumnLayoutComponent implements OnInit, OnDestroy {
  @Output() profileClick = new EventEmitter<void>();

  private destroy$: Subject<void> = new Subject<void>();

  user = {
    name: 'Groovia Coach',
    picture: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80',
  };

  constructor(
    private sidebarService: NbSidebarService,
    private breakpointService: NbMediaBreakpointsService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
  ) {}

  ngOnInit() {
    // Detectar cambios en el tamaño de pantalla y colapsar el sidebar automáticamente en móviles
    const { md } = this.breakpointService.getBreakpointsMap();

    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < md),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanMd: boolean) => {
        if (isLessThanMd) {
          // En pantallas pequeñas, colapsar el sidebar automáticamente
          this.sidebarService.collapse('menu-sidebar');
        } else {
          // En pantallas grandes, también asegurar que esté colapsado inicialmente
          // (el atributo start="collapsed" ya lo hace, pero esto es un refuerzo)
          this.sidebarService.collapse('menu-sidebar');
        }
      });

    // Colapsar el sidebar al iniciar en todas las resoluciones
    // El atributo start="collapsed" debería hacer esto, pero lo reforzamos
    setTimeout(() => {
      this.sidebarService.collapse('menu-sidebar');
    }, 0);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onProfileClick() {
    this.profileClick.emit();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }
}
