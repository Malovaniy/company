import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {
  cities = ['kiew']
  constructor() { }

  ngOnInit(): void {
  }

}
