import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademiasComponent } from './academias.component';

const routes: Routes = [
  {
    path: '',
    component: AcademiasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademiasRoutingModule {
}

