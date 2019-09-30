import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef
} from '@angular/core';
import { ICareerLine, IEmployee } from 'epromotion';
import { Observable } from 'rxjs';
import { CareerService } from '../../../../../epromotion/src/lib/career/career.service';
import { MyDossierService } from '../my-dossier.service';

@Component({
  selector: 'fps-my-dossier-container',
  templateUrl: './my-dossier-container.component.html',
  styleUrls: ['./my-dossier-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyDossierContainerComponent implements OnInit {
  // @ViewChild('sidenavContentRef', { static: true })
  public sidenavContentRef: TemplateRef<any>;
  // @ViewChild(RouterOutlet, { static: false }) public outlet: RouterOutlet;

  public readonly navLinks = [
    {
      route: ['./', 'personal-info'],
      title: 'Employee.MyDossier.PersonalInfo.Title'
    },
    {
      route: ['./', 'career'],
      title: 'Employee.MyDossier.Career.Title'
    },
    {
      route: ['./', 'promotion'],
      title: 'Employee.MyDossier.Promotions.Title'
    }
  ];

  public readonly employee$: Observable<IEmployee>;
  public readonly career$: Observable<ICareerLine[]>;

  constructor(
    private readonly careerService: CareerService,
    private readonly myDossierService: MyDossierService
  ) // private readonly sidenavService: SidenavService,
  // private readonly router: Router,
  {
    this.employee$ = this.myDossierService.getEmployee();
    this.career$ = this.careerService.getAll();
  }

  public ngOnInit(): void {
    // this.sidenavService.open(this.sidenavContentRef);
    // this.router.events.subscribe(event => {
    //   if (
    //     event instanceof ActivationStart &&
    //     event.snapshot.outlet === 'sidenav'
    //   ) {
    //     this.outlet.deactivate();
    //   }
    // });
  }
}
