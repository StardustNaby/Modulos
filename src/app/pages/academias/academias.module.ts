import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbTagModule } from '@nebular/theme';

import { AcademiasComponent } from './academias.component';
import { AcademiasRoutingModule } from './academias-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbTagModule,
    AcademiasRoutingModule,
  ],
  declarations: [AcademiasComponent],
})
export class AcademiasModule {}

