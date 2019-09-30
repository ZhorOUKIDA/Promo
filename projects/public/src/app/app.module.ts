import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MyDossierModule } from './my-dossier/my-dossier.module';
import { MyVacanciesModule } from './my-vacancies/my-vacancies.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    CoreModule,
    SharedModule,

    MyDossierModule,

    MyVacanciesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
