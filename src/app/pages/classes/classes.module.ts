import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';

import { ClassesComponent } from './classes.component';
import { ClassesRoutingModule } from './classes-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    ClassesRoutingModule,
  ],
  declarations: [ClassesComponent],
})
export class ClassesModule {}

