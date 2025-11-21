import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbUserModule } from '@nebular/theme';

import { CreateComponent } from './create.component';
import { CreateRoutingModule } from './create-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbUserModule,
    CreateRoutingModule,
  ],
  declarations: [CreateComponent],
})
export class CreateModule {}

