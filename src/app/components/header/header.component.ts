import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isBurgerOpened =false
  languages = ['UA', "EN"]
  selectetLang = "UA"
  isOpenMenu= false
  constructor(
    private languageService: LanguageService
  ) {
   }

  ngOnInit(): void {
  }
  openLangMenu(){
    this.isOpenMenu = true
  }
  closeLangMenu(){
    this.isOpenMenu = false
  }
  setLang(lang: string){
    this.selectetLang = lang
    this.languageService.setLanguage(lang.toLowerCase())
  }

  openBurger(){
    this.isBurgerOpened = true  
  }
  closeBurger(){
    this.isBurgerOpened = false  
  }
}
