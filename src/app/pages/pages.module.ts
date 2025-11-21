import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbMenuModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    FormsModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbDialogModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbUserModule,
    NbInputModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    ProfileDialogComponent,
    ProfileComponent,
  ],
  exports: [
    ProfileDialogComponent,
  ],
  entryComponents: [
    ProfileDialogComponent,
  ],
})
export class PagesModule {
}
