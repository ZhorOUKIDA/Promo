import { NgModule } from '@angular/core';
import { EpromotionModule } from 'epromotion';
import { CareerService } from '../../../../epromotion/src/lib/career/career.service';
import { SharedModule } from '../shared/shared.module';
import { MyDossierContainerComponent } from './';
import { MyDossierRoutingModule } from './my-dossier-routing.module';
import { MyDossierService } from './my-dossier.service';
import { PersonalInfoService } from './personal-info.service';
import { CareerLinesResolverService } from './shared/career-lines-resolver.service';
import { PersonalInfoResolverService } from './shared/personal-info-resolver.service';
import { MyDossierSidenavComponent } from './my-dossier-sidenav/my-dossier-sidenav.component';

@NgModule({
  declarations: [MyDossierContainerComponent, MyDossierSidenavComponent],
  imports: [EpromotionModule, MyDossierRoutingModule, SharedModule],
  providers: [
    CareerLinesResolverService,
    MyDossierService,
    PersonalInfoResolverService,
    PersonalInfoService,
  ],
})
export class MyDossierModule {
  /**/
}
