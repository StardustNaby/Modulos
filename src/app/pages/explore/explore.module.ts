import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';

import { ExploreComponent } from './explore.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    ExploreRoutingModule,
  ],
  declarations: [ExploreComponent],
})
export class ExploreModule {}

