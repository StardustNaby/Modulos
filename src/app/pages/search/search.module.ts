import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbCardModule,
    SearchRoutingModule,
  ],
  declarations: [SearchComponent],
})
export class SearchModule {}

