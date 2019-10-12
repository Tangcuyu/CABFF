import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  language: string;

  constructor(private translateService: TranslateService) { }

  onLangChange() {
    this.language = this.translateService.currentLang;
    if (this.language === 'zh') {
      this.translateService.use('en');
    } else {
      this.translateService.use('zh');
    }
  }

}
