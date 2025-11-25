import { NgModule } from '@angular/core';
import { 
  NbButtonModule, 
  NbCardModule, 
  NbCalendarModule, 
  NbIconModule, 
  NbTagModule
} from '@nebular/theme';

import { EventosComponent } from './eventos.component';
import { EventosRoutingModule } from './eventos-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbTagModule,
    NbCalendarModule,
    EventosRoutingModule,
  ],
  declarations: [EventosComponent],
})
export class EventosModule {}

