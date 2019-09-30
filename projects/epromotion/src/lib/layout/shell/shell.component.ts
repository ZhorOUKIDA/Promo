import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fps-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) private sidenav: MatSidenav;
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    /**/
  } // private readonly sidenavService: SidenavService

  public ngOnInit() {
    // this.sidenavService.setPanel(this.sidenav);
    // this.sidenavService.setContent(this.viewContainerRef);
  }
}
