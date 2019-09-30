import { Routes } from '@angular/router';
import {
  CareerContainerComponent,
  PersonalInfoContainerComponent,
  PromotionContainerComponent
} from 'epromotion';
import { MyDossierContainerComponent } from '.';
import { MyDossierSidenavComponent } from './my-dossier-sidenav/my-dossier-sidenav.component';
import { CareerLinesResolverService } from './shared/career-lines-resolver.service';
import { PersonalInfoResolverService } from './shared/personal-info-resolver.service';

export const routes: Routes = [
  {
    path: '',
    component: MyDossierContainerComponent,
    children: [
      {
        path: 'personal-info',
        component: PersonalInfoContainerComponent,
        resolve: { info: PersonalInfoResolverService }
      },
      {
        path: 'career',
        component: CareerContainerComponent,
        resolve: { careerLines: CareerLinesResolverService }
      },
      {
        path: 'promotion',
        component: PromotionContainerComponent
      },
      {
        path: '',
        redirectTo: 'personal-info',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: MyDossierSidenavComponent,
    outlet: 'sidenav'
  }
];
