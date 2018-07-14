import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact = ['firstName', 'lastName', 'phoneNumber', 'email'];

  constructor() { }

  ngOnInit() {
  }

}
