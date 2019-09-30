import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeNl from '@angular/common/locales/nl';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'fps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'e-promotion-public';

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('nl');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('nl');

    registerLocaleData(localeFr, 'fr');
    registerLocaleData(localeNl, 'nl');
  }
}
