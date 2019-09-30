import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './my-dossier.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDossierRoutingModule {}
