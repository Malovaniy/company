import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arrow-transform',
  templateUrl: './arrow-transform.component.html',
  styleUrls: ['./arrow-transform.component.scss']
})
export class ArrowTransformComponent implements OnInit {
  @Input() width = '20px'
  @Input() isDark = false

  constructor() { }

  ngOnInit(): void {
  }

}
