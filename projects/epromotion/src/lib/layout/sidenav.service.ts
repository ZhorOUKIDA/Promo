import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private panel: MatSidenav;
  private viewContainerRef: ViewContainerRef;

  public setPanel(sidenav: MatSidenav): void {
    this.panel = sidenav;
  }

  public setContent(viewContainerRef: ViewContainerRef): void {
    this.viewContainerRef = viewContainerRef;
  }

  public open(template: TemplateRef<any>): Promise<MatDrawerToggleResult> {
    this.createView(template);
    return this.panel.open();
  }

  private createView(template: TemplateRef<any>): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(template);
  }

  public close(): Promise<MatDrawerToggleResult> {
    return this.panel.close();
  }

  public toggle(): Promise<MatDrawerToggleResult> {
    return this.panel.toggle();
  }
}
