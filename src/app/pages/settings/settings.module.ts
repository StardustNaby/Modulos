import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  NbButtonModule, 
  NbCardModule, 
  NbIconModule, 
  NbSelectModule,
  NbInputModule,
  NbToggleModule
} from '@nebular/theme';

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    NbToggleModule,
    SettingsRoutingModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}

