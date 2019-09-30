import { Routes } from '@angular/router';
import { NotFoundComponent } from 'epromotion/lib/layout/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'dossier',
    loadChildren: () =>
      import('./my-dossier/my-dossier.module').then(m => m.MyDossierModule)
  },
  {
    path: 'vacancies',
    loadChildren: () =>
      import('./my-vacancies/my-vacancies.module').then(
        m => m.MyVacanciesModule
      )
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: 'dossier',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '404' }
];
