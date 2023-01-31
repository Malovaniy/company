import {Injectable} from '@angular/core';

export const SupportedLanguageCode: string[] = ['en', 'ua'];
export const DefaultLanguageCode = 'ua';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(
    private translate: TranslateService
  ) {
  }

  private currentLanguage = 'ua';

  public isSupportedLanguageCode(languageCode: string): boolean {
    return SupportedLanguageCode.includes(languageCode);
  }

  public setLanguage(languageCode: string) {
    let preparedLanguageCode = languageCode;
    if (this.isSupportedLanguageCode(languageCode) === false) {
      // this.loggerService.error('Try set unsupported language code ' + languageCode + '. Use default ' + DefaultLanguageCode);
      preparedLanguageCode = DefaultLanguageCode;
    }
    if (this.currentLanguage === preparedLanguageCode) {
      // this.loggerService.debug('Language ' + preparedLanguageCode + 'already used. Skip change language');
      return;
    }

    // this.loggerService.debug('Set Language to ' + preparedLanguageCode);
    this.currentLanguage = preparedLanguageCode;
    this.translate.setDefaultLang(preparedLanguageCode);
  }
}
