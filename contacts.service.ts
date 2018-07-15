import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = [
    {
      id: 0,
      firstName: 'First Name'
    },
    {
      id: 1,
      lastName: 'Last Name'
    },
    {
      id: 2,
      phoneNumber: 'Phone Number'
    },
    {
      id: 3,
      email: 'Email'
    }
  ];

  constructor() { }
}
