import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-hovered',
  templateUrl: './btn-hovered.component.html',
  styleUrls: ['./btn-hovered.component.scss']
})
export class BtnHoveredComponent implements OnInit {
  @Input() message = ''
  @Input() color = ''
  @Input() isArrow = false
  @Input() fontSize = '15px'
  @Input() isDark = false
  constructor() { }

  ngOnInit(): void {
  }

}
