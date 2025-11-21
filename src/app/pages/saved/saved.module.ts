import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { SavedComponent } from './saved.component';
import { SavedRoutingModule } from './saved-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    SavedRoutingModule,
  ],
  declarations: [SavedComponent],
})
export class SavedModule {}

