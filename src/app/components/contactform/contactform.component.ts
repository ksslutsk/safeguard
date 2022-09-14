import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { contactInterface } from "../../utils/contactInterface"
import { SendContactService } from 'src/app/sevices/send-contact.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {

  messageForm: FormGroup;

  constructor(public sendService: SendContactService) {
    
    this.messageForm = new FormGroup({
      fullName: new FormControl('',
        [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Zа-яА-Я]*$")]),
      companyName: new FormControl(''),
      phoneNumber: new FormControl('',
        [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
      email: new FormControl('',
        [Validators.required, Validators.email]),
      message: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  sendMessage(): void {
    let contact = { ...this.messageForm.value } as contactInterface;

    if (this._fullName?.invalid || this._phoneNumber?.invalid || this._email?.invalid) {
      return;
    }
    this.sendService.sendContacts(contact);
  }


  get _fullName() {
    return this.messageForm.get("fullName");
  }
  get _phoneNumber() {
    return this.messageForm.get("phoneNumber");
  }
  get _email() {
    return this.messageForm.get("email");
  }
  get _companyName() {
    return this.messageForm.get("companyName");
  }

}
