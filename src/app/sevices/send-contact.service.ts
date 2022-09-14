import { Injectable } from '@angular/core';
import { contactInterface } from '../utils/contactInterface';

@Injectable({
  providedIn: 'root'
})
export class SendContactService {

  constructor() { }
  sendContacts(contact: contactInterface): any {
    console.table(contact);
  }
}
