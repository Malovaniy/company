import { Component, OnInit } from '@angular/core';
import { AppConfig, Scheme } from 'src/app/modules/eazimate/config/app.config';

@Component({
  selector: 'app-custom-switcher',
  templateUrl: './custom-switcher.component.html',
  styleUrls: ['./custom-switcher.component.scss']
})
export class CustomSwitcherComponent implements OnInit {
  mode?: any = 'dark';
  config?: AppConfig;

  constructor() { }

  ngOnInit(): void {
    let body = document.querySelector('body')
    body?.classList.add('dark')
  }

  
  toggle(): void {
    let body = document.querySelector('body');
    body?.classList.remove(this.mode);
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    body?.classList.add(this.mode)
  }

}
