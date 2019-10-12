import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';


@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  private language: string;


  constructor(private router: Router, private translateService: TranslateService) {
    // --- set i18n begin --- 翻译组件
    this.translateService.addLangs(['zh', 'en']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'en');
    // --- set i18n end ---
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}
