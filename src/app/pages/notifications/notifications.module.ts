import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';

import { NotificationsComponent } from './notifications.component';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NotificationsRoutingModule,
  ],
  declarations: [NotificationsComponent],
})
export class NotificationsModule {}

